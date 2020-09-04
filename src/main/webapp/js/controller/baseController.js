app.controller('baseController',function($scope){
    //ids是选中id的数组
    $scope.selectIds=[];
    $scope.searchEntity={};
    //分页控件配置
    $scope.paginationConf = {
        currentPage: 1,
        totalItems: 10,
        itemsPerPage: 10,
        perPageOptions: [5,10,20,30,40,50],
        onChange: function(){
            $scope.reloadList();//重新加载
        }
    };
    //把选中的id加入到数组中，取消的从数组删除
    $scope.updateSelection=function($event,id){
        if($event.target.checked){
            //选中的添加到数组
            $scope.selectIds.push(id);
        }else{
            //先获取id在数组中的角标 然后删除
            var index =	$scope.selectIds.indexOf(id);
            $scope.selectIds.splice(index,1);
        }
    };
    $scope.reloadList = function(){
        /**
         * $scope.paginationConf.currentPage当前页（默认是1）
         * $scope.paginationConf.itemsPerPage页面大小（默认是10）
         */
        // $scope.findPage($scope.paginationConf.currentPage,$scope.paginationConf.itemsPerPage);
        $scope.search ($scope.paginationConf.currentPage,$scope.paginationConf.itemsPerPage,$scope.searchEntity);
    };
})