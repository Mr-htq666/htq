package com.pinyougou.manager.controller;

import com.pinyougou.pojo.TbSeller;
import com.pinyougou.sellergoods.service.SellerService;
import entity.PageResult;
import entity.Result;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;

@RestController
@RequestMapping("/seller")
public class sellerController {
    @Resource
    private SellerService sellerService;
    //模糊分页查询商家审核信息
    @RequestMapping("/search")
    public PageResult search(@RequestBody TbSeller tbSeller,int page,int rows){
        return sellerService.search(tbSeller,page,rows);
    }
    //查询详情
    @RequestMapping("/findOne")
    public TbSeller findOne(String sellerId){
        return sellerService.findOne(sellerId);
    }
    //审核通过
    @RequestMapping("/updateStatus")
    public Result updateStatus(String sellerId,String status){
        try {
            sellerService.updateStatus(sellerId,status);
            return new Result(true,"审核成功");
        }catch (Exception e){
            return new Result(false,"审核失败");
        }

    }
}
