define(['ojs/ojcore', 'knockout', 'jquery'],
    function(oj, ko, $){
        function helloWorldViewModel(){
            var self = this;
            self.name = ko.observable("Purushotham");
            self.age  = ko.observable("35");
        }
        return new helloWorldViewModel();
    }
);