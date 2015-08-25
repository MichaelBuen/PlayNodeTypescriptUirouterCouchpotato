///<reference path="../typings/requirejs/require.d.ts"/>
///<reference path="../typings/angularjs/angular.d.ts"/>
define(function (require) {
    var mod = require('theMainModule');
    mod.config(['routeDefsProvider', function (routeDefsProvider) {
            // in large applications, you don't want to clutter up app.config
            // with routing particulars.  You probably have enough going on here.
            // Use a service provider to manage your routing.
        }]);
    mod.run([
        '$couchPotato', '$state', '$stateParams', '$rootScope', '$resource',
        function ($couchPotato, $state, $stateParams, $rootScope, $resource) {
            // by assigning the couchPotato service to the lazy property, we
            // the register functions will know to run-time-register components
            // instead of config-time-registering them.
            mod["lazy"] = $couchPotato;
            // angular-ui-project recommends assigning these services to the root
            // scope.  Others have argued that doing so can lead to obscured
            // dependencies and that making services directly available to html and
            // directives is unclean.  In any case, the ui-router demo assumes these
            // are available in the DOM, therefore they should be on $rootScope.
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
        }
    ]);
});
//# sourceMappingURL=TheMainModuleInit.js.map