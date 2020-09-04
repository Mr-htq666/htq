app.controller('brandController',function ($scope,$controller,brandService) {
    $controller('baseController',{$scope:$scope});
    //删除
    $scope.deleteBrand=function(){
        brandService.deleteBrand($scope.selectIds).success(function (response) {
            if(response.success){
                //添加成功 刷新页面
                $scope.reloadList();
            }else {
                alert(response.message);
            }
        });
    };


    //修改回显
    $scope.findOne =function(id){
        brandService.findOne(id).success(function (response) {
            $scope.entity=response;
        })
    };
    //添加
    $scope.save =function () {
        brandService.save($scope.entity).success(function (response) {
            if(response.success){
                //添加成功 刷新页面
                $scope.reloadList();
            }else {
                alert(response.message);
            }
        })
    };
    //查询全部
    $scope.findAll = function () {
        brandService.findAll().success(function (response) {
            $scope.list = response;
        })
    };

    //分页模糊查询
    $scope.search=function(page,rows,searchEntity){
        brandService.search(page,rows,searchEntity) .success(function (response) {
            $scope.list = response.rows;
            $scope.paginationConf.totalItems=response.total;
        })
    };
    $scope.findPage  =function(page,rows){
        brandService.findPage(page,rows).success(function (response) {
            $scope.list = response.rows;
            $scope.paginationConf.totalItems=response.total;
        })
    };


});