//************************************************
//  *Author：jxx
//  *QQ：283591387
//  *自定义业务逻辑扩展
//************************************************
export default function() {
	return {
		methods: {
			onInited() { //页面参数初始化
				//设置table超出换行显示
				this.textInline = false;

				//设置列宽度
				//this.columns[1].width = 70;

				//设置table为水平显示或者list列表显示
				this.direction = 'horizontal' //list
				//如果为list列表显示，指定list的标题列
				//this.titleField="字段";

				//设置自定义格式显示
				this.columns.forEach(column => {
					if (column.field == 'Specs' || column.field == 'Price') {
						column.width = 55;
						if (column.field == 'Price') {
							column.formatter = true;
						}
					} else if (column.field == 'Img') {
						column.width = 60;
						//自定义格式化显示,在下面的formatter实现具体逻辑
						//column.formatter=true;

						//指定字段为date类型不显示时分秒
						//column.type="date";

						//设置列宽度
					}
				})

				//页面打开时禁用加载数据
				//this.load=false;
				//页面打开时默认弹出查询框
				//this.searchModel = true;
			},
			formatter(row, column, index) { //自定义格式化
				if (column.field == 'Price') {
					if (row.Price < 200) {
						return '<a style="color:red;">' + row[column.field] + '</a>';
					} else {
						return row[column.field] + '88'
					}
				}
				return row[column.field]
			},
			rowClick(index, row, column) { //行点击事件(默认触发编辑)
				return true;
			},
			searchBefore(params) { //查询前
				return true;
			},
			updateBefore(formData) { //更新保存前操作
				return true;
			},
			addBefore(formData) { //新建保存前操作
				return true;
			},
			searchFormOnChange(field, value) { //查询弹出框下拉框或日期选中事件
				//if(field=="字段"){
				// 	console.log(value)
				//}
			},
			editFormOnChange(field, value) { //新建编辑弹出框下拉框或日期选中事件
				//if(field=="字段"){
				// 	console.log(value)
				//}
			},
		}
	}
}
