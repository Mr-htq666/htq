package com.pinyougou.manager.controller;

import com.pinyougou.pojo.TbTypeTemplate;
import com.pinyougou.sellergoods.service.TypeTemplateService;
import entity.PageResult;
import entity.Result;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/typeTemplate")
public class TypeTemplateController {
    @Resource
    private TypeTemplateService typeTemplateService;

    @RequestMapping("/getTypeList")
    public List<Map> getTypeList(){
        return typeTemplateService.getTypeList();
    }




    //模糊分页查询
    @RequestMapping("/search")
    public PageResult search(@RequestBody TbTypeTemplate tbTypeTemplate,int page,int rows){
        PageResult search = typeTemplateService.search(tbTypeTemplate,page,rows);
        return search;
    }
    //删除
    @RequestMapping("/dele")
    public Result dele(@RequestBody Long[] ids){
        try {
            typeTemplateService.dele(ids);
            return new Result(true,"删除成功");
        }catch (Exception e){
            return new Result(false,"删除失败");
        }
    }
    //添加和修改
    @RequestMapping("/save")
    public Result save(@RequestBody TbTypeTemplate tbTypeTemplate){
      try {
          typeTemplateService.save(tbTypeTemplate);
          return new Result(true,"操作成功");
      }catch (Exception e){
          return new Result(false,"操作失败");
      }
    }
    //回显
    @RequestMapping("/findOne")
    public TbTypeTemplate findOne(Long id){
        return typeTemplateService.findOne(id);
    }
}
