package com.pinyougou.manager.controller;

import com.pinyougou.pojo.TbItemCat;
import com.pinyougou.sellergoods.service.ItemCatService;
import entity.Result;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.List;

@RestController
@RequestMapping("/itemCat")
public class ItemCatController {
    @Resource
    private ItemCatService itemCatService;

  @RequestMapping("/findByParentId")
    public List<TbItemCat> findByParentId(Long parentId){
      return itemCatService.findByParentId(parentId);
  }
    //删除
    @RequestMapping("/deleteByIds")
    public Result deleteByIds(@RequestBody Long[] ids){

        try {
            itemCatService.deleteByIds(ids);
            return new Result(true,"删除成功");
        } catch (Exception e) {
            e.printStackTrace();
            return new Result(false,"删除失败");
        }
    }
    //添加与修改
    @RequestMapping("/save")
    public Result save(@RequestBody TbItemCat tbItemCat){
        try {
            itemCatService.save(tbItemCat);
            return new Result(true,"编辑成功");
        } catch (Exception e) {
            e.printStackTrace();
            return new Result(false,"编辑失败");
        }
    }
    //回显
    @RequestMapping("/findOne")
    public TbItemCat findOne(Long id){
      return itemCatService.findOne(id);
    }
}
