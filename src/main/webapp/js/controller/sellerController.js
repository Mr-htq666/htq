 //控制层 
app.controller('sellerController' ,function($scope,$controller   ,sellerService){	
	
	$controller('baseController',{$scope:$scope});//继承

    //分页
    $scope.search=function (page,rows,seachEntity) {
        sellerService.search(page,rows,seachEntity).success(function (response) {
            $scope.list=response.rows;
            $scope.paginationConf.totalItems=response.total;
        })
    };
    $scope.findOne=function (sellerId) {
        sellerService.findOne(sellerId).success(function (response) {
            $scope.entity=response;
        })
    }
    $scope.updateStatus=function (sellerId,status) {
        sellerService.updateStatus(sellerId,status).success(function (response) {
            if(response.success){
                $scope.reloadList();
            }else {
                alert(response.message);
            }
        })
    }



    
});	
