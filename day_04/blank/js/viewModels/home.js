define(['ojs/ojcore', 'knockout', 'jquery'],
    function(oj, ko, $){
        function homeViewModel(){
            var self = this;
            self.name = ko.observable("Purushotham");
            self.age  = ko.observable("35");
        }
        return new homeViewModel();
    }
);