package com.wjs.action;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.opensymphony.xwork2.ActionSupport;

public class IndexAction extends ActionSupport {
	private Map<String, Object> pageModel = new HashMap<String, Object>();

	public String showIndex() {
		List<String> data = new ArrayList<String>();
		data.add("首页");
		data.add("工作日志");
		data.add("设备运行记录");
		data.add("其他");
		data.add("联系我们");
		data.add("关于我们");
		pageModel.put("model", data);
		System.out.println("hello na!");
		return SUCCESS;
	}

	public void setPageModel(Map<String, Object> pageModel) {
		this.pageModel = pageModel;
	}

	public Map<String, Object> getPageModel() {
		return pageModel;
	}
}
