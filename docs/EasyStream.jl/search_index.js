var documenterSearchIndex = {"docs":
[{"location":"pages/library/#EasyStream.jl-1","page":"Library","title":"EasyStream.jl","text":"","category":"section"},{"location":"pages/library/#","page":"Library","title":"Library","text":"","category":"page"},{"location":"pages/library/#","page":"Library","title":"Library","text":"Modules = [EasyStream]","category":"page"},{"location":"pages/library/#EasyStream.distributionByClass-NTuple{6,Any}","page":"Library","title":"EasyStream.distributionByClass","text":"distributionByClass(xg, yg, pred, predicted_y; colors = [:pink, :lightblue])\n\nGenerates a graph plotting the samples and shows the spatial limit for what the model considers contained in each class.\n\nX is the variable contains the points to be ploted in the scatter and predicted_y determine the classes of these points.\n\nVariables xg and xy determine the grid of the space. More points contained in these variables mean a more detailed space.\n\nVariable pred contains the model that will be used to determined the spacial classification.\n\n\n\n\n\n","category":"method"},{"location":"pages/library/#EasyStream.prequentialAnalyze-NTuple{4,Any}","page":"Library","title":"EasyStream.prequentialAnalyze","text":"prequentialAnalyze(ŷ, y, steps, meansure)\n\nGenerates a graph plotting the results of the meansure on intervals of time defined to a determined number of smaples length(ŷ) / steps.\n\nŷ and y are the values wich will be used in the meansure function to be result the plot points.\n\nsteps defines how much grainy will be the graph.\n\n\n\n\n\n","category":"method"},{"location":"pages/guide/#Package-Guide-1","page":"Guide","title":"Package Guide","text":"","category":"section"},{"location":"pages/guide/#Installation-1","page":"Guide","title":"Installation","text":"","category":"section"},{"location":"pages/guide/#","page":"Guide","title":"Guide","text":"EasyStream can be installed using the Julia package manager. From the Julia REPL, type ] to enter the Pkg REPL mode and run.","category":"page"},{"location":"pages/guide/#","page":"Guide","title":"Guide","text":"pkg> add https://github.com/Conradox/EasyStream.jl","category":"page"},{"location":"pages/guide/#Generating-your-first-graph-1","page":"Guide","title":"Generating your first graph","text":"","category":"section"},{"location":"pages/guide/#EasyStream.evaluate-1","page":"Guide","title":"EasyStream.evaluate","text":"","category":"section"},{"location":"pages/guide/#","page":"Guide","title":"Guide","text":"Everything starts with the EasyStream.evaluate function where you need to pass as parameters three essential elements to the analysis to get started.","category":"page"},{"location":"pages/guide/#","page":"Guide","title":"Guide","text":"EasyStream.evaluate(models, stream, measures = measures)","category":"page"},{"location":"pages/guide/#","page":"Guide","title":"Guide","text":"streams parameter needs to receive a Stream that is a struct of EasyStream. The Stream stores the data for training and testing the models and some other meta data about the stream. It also supports a vector of Stream.","category":"page"},{"location":"pages/guide/#","page":"Guide","title":"Guide","text":"models receives one model or a vector of models to be analyzed. Here you can use custom models, but you will have to overload some structs and functions.","category":"page"},{"location":"pages/guide/#","page":"Guide","title":"Guide","text":"note: Note\nThe EasyStream has support to MLJModels i.e there are a wide quantity of ready models to be used. As in MLJ library, you only need to add the model package to the project using ]add and use the macro @load to call the model.Examplepkg> add NearestNeighbors\njulia> using EasyStream\njulia> @load KNNClassifier\n\nmodels = KNNClassifier()\nstreams = Data()\nmeasures = [:time, :allocation, :accuracy]\nEasyStream.evaluate(models, stream, measures = measures)\n","category":"page"},{"location":"pages/guide/#","page":"Guide","title":"Guide","text":"measures receives all of desired measures that you will be used in graphs and tables.  ","category":"page"},{"location":"pages/guide/#EasyStream.generate-1","page":"Guide","title":"EasyStream.generate","text":"","category":"section"},{"location":"pages/guide/#","page":"Guide","title":"Guide","text":"After to use the EasyStream.evaluate, you are ready to use the function to create the elements to your analysis.","category":"page"},{"location":"pages/guide/#","page":"Guide","title":"Guide","text":"  EasyStream.generate(output)","category":"page"},{"location":"pages/guide/#","page":"Guide","title":"Guide","text":"The output is built by an array where its first element is the type of the output, such as :table and :bars. The following elements are the measures like :time, :allocation and :accuracy. Some examples of outputs are [:bars, :tine], [:table, :time, :accuracy] and [:bars, :accuracy].","category":"page"},{"location":"#EasyStream.jl-1","page":"Home","title":"EasyStream.jl","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"This resource has the objective to explain what you need to know to do a good use of the functionalities offered for this library.","category":"page"},{"location":"#What-is-the-EasyStream-library?-1","page":"Home","title":"What is the EasyStream library?","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"It is a Library idealized to be a simple tool to analyze and generate tables and graphs of the performance of predictive models in a stream environment.","category":"page"},{"location":"#Package-Features-1","page":"Home","title":"Package Features","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"Automatically builds tables and Graphs\nSupport MLJModels","category":"page"}]
}
