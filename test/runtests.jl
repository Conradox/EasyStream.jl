using EasyStream
using Test

@testset "Stream Test" begin
    stream = EasyStream.Dataset1CDT()
    @test size(EasyStream.next!(stream), 1) == 150
    @test size(EasyStream.next!(stream), 1) == 1
    @test size(EasyStream.next!(stream), 1) == 1

    initial_size = 200
    flux_size = 5
    stream = EasyStream.Dataset1CDT(initial_size, flux_size)
    @test size(EasyStream.next!(stream), 1) == initial_size
    @test size(EasyStream.next!(stream), 1) == flux_size
    @test size(EasyStream.next!(stream), 1) == flux_size

    initial_size = 16000
    flux_size = 1
    stream = EasyStream.Dataset1CDT(initial_size, flux_size)
    @test size(EasyStream.next!(stream), 1) == initial_size
    @test EasyStream.next!(stream) == nothing

    initial_size = 16001
    flux_size = 1
    stream = EasyStream.Dataset1CDT(initial_size, flux_size)
    @test size(EasyStream.next!(stream), 1) == initial_size - 1
    @test EasyStream.next!(stream) == nothing

    @test_logs (:warn, "initial size é zero") EasyStream.Dataset1CDT(0, 1)
    @test_logs (:warn, "flux size é zero") EasyStream.Dataset1CDT(1, 0)
end

@testset "Stream Indexing" begin
    @testset "First Dimension" begin
        buffer = EasyStream.Dataset1CDT()
        stream = EasyStream.Dataset1CDT()
        stream = EasyStream.Stream(stream)

        test_data = stream.data[1]
        data_size = size(test_data, 1)
        for i=1:data_size
            @test stream[i] == test_data[i,:]
        end

        @test_throws BoundsError stream[-1]

        @test_throws BoundsError stream[data_size + 1]

        @test stream[:] == test_data[:, :]
        
        for i=1:data_size
            @test stream[1:i] == test_data[1:i,:]
        end
    end
end