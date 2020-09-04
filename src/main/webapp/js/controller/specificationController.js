app.controller('specificationController',function ($scope,$controller,specificationService) {
    $controller('baseController',{$scope:$scope});
    $scope.dele=function () {

        specificationService.dele($scope.selectIds).success(function (response) {

            if(response.success){
                $scope.reloadList();
            }else{
                alert(response.message);
            }
        })
    };
    //分页
    $scope.search=function (page,rows,seachEntity) {
        specificationService.search(page,rows,seachEntity).success(function (response) {
            $scope.list=response.rows;
            $scope.paginationConf.totalItems=response.total;
        })
    };
    //规格选项新建
    $scope.addTableRow=function () {
        $scope.entity.specificationOptionList.push({});
    };
    //规格选项删除
    $scope.deleTableRow=function (index) {
        $scope.entity.specificationOptionList.splice(index,1);
    };
    //新增和修改方法
    $scope.save=function () {
        specificationService.save($scope.entity).success(function (response) {
            if(response.success){
                $scope.reloadList();
            }else{
                alert(response.message);
            }
        })
    }
    //修改回显
    $scope.findOne=function (id) {
        specificationService.findOne(id).success(function (response) {
            $scope.entity=response;
        })
    }
});