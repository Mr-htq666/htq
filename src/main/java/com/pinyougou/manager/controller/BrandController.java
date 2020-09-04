package com.pinyougou.manager.controller;

import com.pinyougou.pojo.TbBrand;
import com.pinyougou.sellergoods.service.BrandService;
import entity.PageResult;
import entity.Result;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;

/**
 * service
 * @author Administrator
 *
 */
@RestController
@RequestMapping("/brand")
public class BrandController {

	@Resource
	private BrandService brandService;
	
	/**
	 * 返回全部列表
	 * @return
	 */
	@RequestMapping("/findAll")
	public List<TbBrand> findAll(){			
		return brandService.findAll();
	}

	/**
	 * 分页查询
	 * @param page
	 * @param rows
	 * @return
	 */
	@RequestMapping("/findPage")
	public PageResult findPage(int page,int rows){
		PageResult page1 = brandService.findPage(page, rows);
		return page1;
	}
	//分页模糊查询
	@RequestMapping("/search")
	public PageResult search(@RequestBody TbBrand tbBrand, int page,int rows){

		return brandService.search(tbBrand,page,rows);
	}
	//添加
	@RequestMapping("save")
	public Result save(@RequestBody TbBrand tbBrand){
		try {
			brandService.save(tbBrand);
			return new Result(true,"操作成功");
		}catch (Exception e){
			return new Result(false,"操作失败");
		}
	}
	//修改回显
	@RequestMapping("/findOne")
	public TbBrand findOne(Long id){
		return brandService.findOne(id);
	}
	//删除
	@RequestMapping("/deleteBrand")
	public Result deleteBrand(@RequestBody Long[] ids){
		try {
			brandService.deleteBrand(ids);
			return new Result(true,"删除成功");
		}catch (Exception e){
			return new Result(false,"删除失败");
		}
	}
	//查询
	@RequestMapping("/brandList")
	public List<Map> brandList(){
		return brandService.brandList();
	}


}
