app.controller('typeTemplateController',function ($scope,$controller,typeTemplateService,brandService,specificationService) {
    $controller('baseController',{$scope:$scope});
    $scope.search=function (page,rows,seachEntity) {
        typeTemplateService.search(page,rows,seachEntity).success(function (response) {
            $scope.list=response.rows;
            $scope.paginationConf.totalItems=response.total;
        });
    };
    $scope.dele=function () {
        typeTemplateService.dele($scope.selectIds).success(function (response) {
            if(response.success){
                $scope.reloadList();
            }else{
                alert(response.message);
            }
        })
    }
    $scope.jsonToString=function (jsonString,key) {
        //我们要把json字符串转换为json数组
        var json = JSON.parse(jsonString);
        //最后要返回一个字符串
        var rs="";
        for(var i=0;i<json.length;i++){
            if(i>0){
                rs+=",";
            }
            rs+=json[i][key];
        }
        return rs;
    }
    $scope.brandList=function () {
        brandService.brandList().success(function (response) {
            $scope.brandList={data:response};
        });

    }
    $scope.specList=function () {
        specificationService.specList().success(function (response) {
            $scope.specList={data:response};
        });

    }
    $scope.addTableRow=function () {
        $scope.entity.customAttributeItems.push({});
    }
    $scope.deleTableRow=function (index) {
        $scope.entity.customAttributeItems.splice(index,1);
    }
   $scope.save=function () {
       typeTemplateService.save($scope.entity).success(function (response) {
           if(response.success){
               $scope.reloadList();
           }else{
               alert(response.message);
           }
       })
   }
   $scope.findOne=function (id) {
       typeTemplateService.findOne(id).success(function (response) {
           $scope.entity=response;

           $scope.entity.brandIds=  JSON.parse($scope.entity.brandIds);//转换品牌列表
           $scope.entity.specIds=  JSON.parse($scope.entity.specIds);//转换规格列表
           if($scope.entity.customAttributeItems==null){
               $scope.entity.customAttributeItems=[];
           }else {

               $scope.entity.customAttributeItems= JSON.parse($scope.entity.customAttributeItems);//转换扩展属性
           }
       })
   }
});