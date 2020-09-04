//控制层
app.controller('itemCatController' ,function($scope,$controller ,itemCatService,typeTemplateService) {

    $controller('baseController', {$scope: $scope});

    //想回显但是格式不对，需要先获取到集合然后把格式改成页面需要的格式再传过去
    $scope.getObject=function(arr,id){
        for(var x=0;x<arr.length;x++){
            if(arr[x].id==id){
               return arr[x];
            }
        }
    }
    //回显
    $scope.findOne=function(id){
        itemCatService.findOne(id).success(function (response) {
            $scope.entity=response;
            //现在我们有模板id，需要模板名称，不去查数据库的方法
            //页面中有一个typeList,从集合中直接拿出来
            var object=$scope.getObject($scope.typeList.data,$scope.entity.typeId);
            $scope.entity.typeId=object;
        })
    }

    //类型模板下拉框
    $scope.getTypeList=function(){
        typeTemplateService.getTypeList().success(function (response) {
            $scope.typeList={data:response};
        })
    }

    //专门定义一个父类的变量,从下面方法里面赋值
    $scope.parentId=0;
    //添加与修改,需要把父类id传过去
    $scope.save=function(){
        $scope.entity.parentId=$scope.parentId;
        $scope.entity.typeId=$scope.entity.typeId.id;
        itemCatService.save($scope.entity).success(function (response) {
            if(response.success){
                if($scope.grade==1){
                    $scope.findByParentId(0);
                }else if($scope.grade==2){
                    $scope.findByParentId($scope.entity_1.id);
                }else if($scope.grade==3){
                    $scope.findByParentId($scope.entity_2.id);
                }
            }else {
                alert(response.message);
            }
        })
    }


    //删除
    $scope.deleteByIds=function(){
        itemCatService.deleteByIds($scope.selectIds).success(function (response) {
            if(response.success){
                if($scope.grade==1){
                    $scope.findByParentId(0);
                }else if($scope.grade==2){
                    $scope.findByParentId($scope.entity_1.id);
                }else if($scope.grade==3){
                    $scope.findByParentId($scope.entity_2.id);
                }
            }else {
                alert(response.message);
            }
        })
    }

    $scope.grade=1;//默认为一级
    //设置级别
    $scope.setGrade=function(value){
        $scope.grade=value;
    }
    //定义两个实体用来记录一级和二级的实体
    $scope.entity_1=null;
    $scope.entity_2=null;

    $scope.selectList=function(entity){
        if($scope.grade==1){
            $scope.parentId=0;
            $scope.entity_1=null;
            $scope.entity_2=null;
        }else if($scope.grade==2){
            $scope.parentId=entity.id;
            $scope.entity_1=entity;
            $scope.entity_2=null;
        }else if($scope.grade==3){
            $scope.parentId=entity.id;
            $scope.entity_2=entity;

        }

    }


    $scope.findByParentId=function (parentId) {
        itemCatService.findByParentId(parentId).success(function (response) {
            $scope.list=response;
        })
    }


});