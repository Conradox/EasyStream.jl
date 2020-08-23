using EasyStream
using Test
@testset "Connectors" begin
    @testset "Tables" begin
        df = EasyStream.DataFrame(x = [1, 2, 3, 4, 5, 6], y = [6, 5, 4, 3, 2, 1])
        conn = EasyStream.TablesConnector(df)
        
        for i = 1:size(df, 1)
            @test EasyStream.hasnext(conn) == true

            next = EasyStream.next(conn)
            for j = 1:size(df, 2)
                @test  next[j]... == df[i, j] 
            end
        end

        @test EasyStream.hasnext(conn) == false

        @test length(conn) == size(df, 1)

        EasyStream.reset!(conn)

        @test conn.state == 0
    end

    @testset "Sort and shuffle functionalities" begin
        df = EasyStream.DataFrame(x = [1, 2, 3, 4, 5, 6], y = [6, 5, 4, 3, 2, 1])
        
        cnn = EasyStream.TablesConnector(df, orderBy = :y)
        for x in df[:,1] 
            @test EasyStream.next(cnn)[2][1] == x
        end

        cnn = EasyStream.TablesConnector(df, orderBy = :x, rev = true)
        for y in df[:,2] 
            @test EasyStream.next(cnn)[1][1] == y
        end

        missing_names = [:c, :d, :e]
        for name in missing_names 
            @test_logs (:warn,"A tabela não possui a coluna $name") EasyStream.TablesConnector(df, orderBy = name)
        end
    end
end

@testset "Streams" begin
    @testset "Batch" begin 
        df = EasyStream.DataFrame(x = [1, 2, 3, 4, 5, 6], y = [6, 5, 4, 3, 2, 1])
        conn = EasyStream.TablesConnector(df)

        for batch = 1:size(df, 1)
            EasyStream.reset!(conn)
            stream = EasyStream.BatchStream(conn, batch = batch)
    
            i = 1
            while i <= size(df, 1)
                index = i + batch -  1
                (index > size(df, 1)) && (index = size(df, 1))
                
                df_row = df[i:index, :]
                stream_next = EasyStream.listen(stream)

                for j = 1:size(df_row, 1)
                    for k = 1:size(df_row, 2)
                        @test stream_next[j, k] == df_row[j, k]
                    end
                end
                i = index + 1
            end
        end

        EasyStream.reset!(conn)
        stream = EasyStream.BatchStream(conn)
        @test stream.events == 0

        i = 1
        for stream_next in stream
            df_row = df[i, :]
            for j=1:size(df, 2)
                @test stream_next[j]... == df_row[j]
            end
            i += 1 
        end
    end
end


