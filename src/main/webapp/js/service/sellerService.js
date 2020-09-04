//服务层
app.service('sellerService',function($http){
    this.search=function (page,rows,seachEntity) {
        return $http.post('../seller/search.do?rows='+rows+"&page="+page,seachEntity);
    };
	 this.findOne=function (sellerId) {
         return $http.get('../seller/findOne.do?sellerId='+sellerId);
     }
    this.updateStatus=function (sellerId,status) {
        return $http.get('../seller/updateStatus.do?sellerId='+sellerId+"&status="+status);
    }
});
