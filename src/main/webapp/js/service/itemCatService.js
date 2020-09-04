//服务层
app.service('itemCatService',function($http){
    this.findByParentId=function (parenId) {
        return $http.post('../itemCat/findByParentId.do?parentId='+parenId);
    }
    //删除
    this.deleteByIds=function (selectIds) {
        return $http.post('../itemCat/deleteByIds.do',selectIds);
    }
    //添加与修改
    this.save=function (entity) {
        return $http.post('../itemCat/save.do',entity);
    }
    //回显
    this.findOne=function (id) {
        return $http.get('../itemCat/findOne.do?id='+id);
    }
});