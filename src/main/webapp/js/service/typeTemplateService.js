app.service('typeTemplateService',function ($http) {
    this.search=function (page,rows,seachEntity) {
        return $http.post('../typeTemplate/search.do?page='+page+"&rows="+rows,seachEntity);
    }
    this.dele=function (selectids) {
        return $http.post('../typeTemplate/dele.do',selectids);
    }
    this.save=function (entity) {
        return $http.post('../typeTemplate/save.do',entity);
    }
    this.findOne=function (id) {
        return $http.post('../typeTemplate/findOne.do?id='+id);
    }
    this.getTypeList=function () {
        return $http.get('../typeTemplate/getTypeList.do');
    }
});