package com.pinyougou.manager.controller;

import com.pinyougou.pojo.TbSpecification;
import com.pinyougou.pojogroup.Specification;
import com.pinyougou.sellergoods.service.SpecificationService;
import entity.PageResult;
import entity.Result;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/specification")
public class SpecificationController {
  @Resource
  private SpecificationService specificationService;

  //模糊分页查询
    @RequestMapping("/search")
    public PageResult search(@RequestBody TbSpecification tbSpecification,int page,int rows){
        PageResult search = specificationService.search(tbSpecification, page, rows);
        return search;
    }

    //删除
    @RequestMapping("/dele")
    public Result dele(@RequestBody Long[] ids){

        try {
            specificationService.dele(ids);

            return new Result(true,"删除成功");

        }catch (Exception e){
          e.printStackTrace();
            return new Result(false,"删除失败");
        }
    }
    //规格的新增和修改
    @RequestMapping("/save")
    public Result save(@RequestBody Specification specification){
        try {
            specificationService.save(specification);
            return new Result(true,"操作成功");
        }catch (Exception e){
            return new Result(false,"操作失败");
        }
    }
    //修改回显
    @RequestMapping("/findOne")
    public Specification findOne( Long id){
       return specificationService.findOne(id);
    }
    //查询
    @RequestMapping("/specList")
    public List<Map> specList(){
       return specificationService.specList();
    }
}
