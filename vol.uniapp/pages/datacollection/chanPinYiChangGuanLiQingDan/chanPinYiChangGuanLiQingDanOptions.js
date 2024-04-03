//************************************************ 
//  *Author：jxx
//  *QQ：283591387
//  *代码由框架生成,任何更改都可能导致被代码生成器覆盖
//  *业务请在chanPinYiChangGuanLiQingDan.js中编写
//************************************************ 
export default function() {
	return {
		editFormFields: {"gongSi":"","cheJian":"","riQi":"","gongXu":"","jiTai":"","xingHao":"","yiChangFenLei":"","buLiangShuLiang":"","queXianDaiMa":"","shiFouDuiCe":"","shiFouYouXiao":"","shiFouGuanBi":"","shiFouCongFu":"","hengJiuGaiShan":"","wenTiDian":"","yuanYinFenXi":"","gaiShanCuoShi":"","zeRenBuMen":"","zeRenRen":"","naQi":"","shiJiWanChengShiJian":"","chaoQiTianShu":"","anShiWanCheng":"","zhuangTai":"","beiZhu":""},
		editFormOptions: [{"title":"公司","field":"gongSi"},
                               {"type":"group"},
                               {"key":"车间","data":[],"title":"车间","field":"cheJian","type":"select"},
                               {"title":"日期","field":"riQi","type":"date"},
                               {"type":"group"},
                               {"key":"工序","data":[],"title":"工序","field":"gongXu","type":"select"},
                               {"key":"机台","data":[],"title":"机台","field":"jiTai","type":"select"},
                               {"type":"group"},
                               {"key":"型号","data":[],"title":"型号","field":"xingHao","type":"select"},
                               {"key":"异常分类","data":[],"title":"异常分类","field":"yiChangFenLei","type":"select"},
                               {"type":"group"},
                               {"title":"不良数量","field":"buLiangShuLiang","type":"number"},
                               {"key":"缺陷代码","data":[],"title":"缺陷代码","field":"queXianDaiMa","type":"select"},
                               {"type":"group"},
                               {"key":"enable","data":[],"title":"是否对策","field":"shiFouDuiCe","type":"switch"},
                               {"key":"enable","data":[],"title":"是否有效","field":"shiFouYouXiao","type":"switch"},
                               {"type":"group"},
                               {"key":"enable","data":[],"title":"是否关闭","field":"shiFouGuanBi","type":"switch"},
                               {"key":"enable","data":[],"title":"是否重复","field":"shiFouCongFu","type":"switch"},
                               {"type":"group"},
                               {"key":"enable","data":[],"title":"恒久改善","field":"hengJiuGaiShan","type":"switch"},
                               {"type":"group"},
                               {"title":"问题点","field":"wenTiDian","type":"textarea"},
                               {"type":"group"},
                               {"title":"原因分析","field":"yuanYinFenXi","type":"textarea"},
                               {"type":"group"},
                               {"title":"改善措施","field":"gaiShanCuoShi","type":"textarea"},
                               {"type":"group"},
                               {"key":"异常管理责任部门","data":[],"title":"责任部门","field":"zeRenBuMen","type":"select"},
                               {"title":"责任人","field":"zeRenRen"},
                               {"title":"纳期","field":"naQi","type":"date"},
                               {"type":"group"},
                               {"title":"实际完成时间","field":"shiJiWanChengShiJian","type":"date"},
                               {"title":"超期天数","field":"chaoQiTianShu","type":"number"},
                               {"key":"enable","data":[],"title":"按时完成","field":"anShiWanCheng","type":"switch"},
                               {"type":"group"},
                               {"key":"异常管理状态","data":[],"title":"状态","field":"zhuangTai","type":"select"},
                               {"type":"group"},
                               {"title":"备注","field":"beiZhu","type":"textarea"}],
		searchFormFields: {"gongSi":"","cheJian":"","riQi":"","gongXu":[],"jiTai":[],"xingHao":[],"yiChangFenLei":[],"queXianDaiMa":[],"zeRenBuMen":"","zeRenRen":""},
		searchFormOptions: [{"title":"公司","field":"gongSi"},{"key":"异常管理责任部门","data":[],"title":"责任部门","field":"zeRenBuMen","type":"select"},{"title":"责任人","field":"zeRenRen"},{"type":"group"},{"key":"车间","data":[],"title":"车间","field":"cheJian","type":"select"},{"title":"日期","field":"riQi","type":"date"},{"type":"group"},{"key":"机台","data":[],"title":"机台","field":"jiTai","type":"selectList"},{"key":"型号","data":[],"title":"型号","field":"xingHao","type":"selectList"},{"key":"工序","data":[],"title":"工序","field":"gongXu","type":"selectList"},{"type":"group"},{"key":"异常分类","data":[],"title":"异常分类","field":"yiChangFenLei","type":"selectList"},{"key":"缺陷代码","data":[],"title":"缺陷代码","field":"queXianDaiMa","type":"selectList"}],
		columns: [{field:'cheJian',title:'车间',type:'string',bind:{ key:'车间',data:[]}},
                       {field:'riQi',title:'日期',type:'date'},
                       {field:'gongXu',title:'工序',type:'string',bind:{ key:'工序',data:[]}},
                       {field:'jiTai',title:'机台',type:'string',bind:{ key:'机台',data:[]}},
                       {field:'xingHao',title:'型号',type:'string',bind:{ key:'型号',data:[]}},
                       {field:'yiChangFenLei',title:'异常分类',type:'string',bind:{ key:'异常分类',data:[]}},
                       {field:'buLiangShuLiang',title:'不良数量',type:'int'},
                       {field:'queXianDaiMa',title:'缺陷代码',type:'string',bind:{ key:'缺陷代码',data:[]}},
                       {field:'shiFouDuiCe',title:'是否对策',type:'int',bind:{ key:'enable',data:[]}},
                       {field:'shiFouYouXiao',title:'是否有效',type:'int',bind:{ key:'enable',data:[]}},
                       {field:'shiFouGuanBi',title:'是否关闭',type:'int',bind:{ key:'enable',data:[]}},
                       {field:'shiFouCongFu',title:'是否重复',type:'int',bind:{ key:'enable',data:[]}},
                       {field:'hengJiuGaiShan',title:'恒久改善',type:'int',bind:{ key:'enable',data:[]}},
                       {field:'wenTiDian',title:'问题点',type:'string'},
                       {field:'yuanYinFenXi',title:'原因分析',type:'string'},
                       {field:'gaiShanCuoShi',title:'改善措施',type:'string'},
                       {field:'zeRenBuMen',title:'责任部门',type:'string',bind:{ key:'异常管理责任部门',data:[]}},
                       {field:'zeRenRen',title:'责任人',type:'string'},
                       {field:'naQi',title:'纳期',type:'date'},
                       {field:'shiJiWanChengShiJian',title:'实际完成时间',type:'date'},
                       {field:'chaoQiTianShu',title:'超期天数',type:'int'},
                       {field:'anShiWanCheng',title:'按时完成',type:'int',bind:{ key:'enable',data:[]}},
                       {field:'zhuangTai',title:'状态',type:'int',bind:{ key:'异常管理状态',data:[]}},
                       {field:'beiZhu',title:'备注',type:'string'},
                       {field:'Creator',title:'创建人',type:'string'},
                       {field:'CreateDate',title:'创建时间',type:'datetime'},
                       {field:'Modifier',title:'修改人',type:'string'},
                       {field:'ModifyDate',title:'修改时间',type:'datetime'}],
		table: {
			key: 'id',
			footer: "Foots",
			cnName: '异常管理清单',
			name: 'chanPinYiChangGuanLiQingDan',
			url: "/chanPinYiChangGuanLiQingDan/",
			sortName: "CreateDate"
		}
	}
}