export interface ITableHeadTitle {
	id: string;
	label: string;
	sort?: boolean;
	textAlign?: string;
	width?: number | string;
}

export interface ITableGoodsHeadTitle {
	label: string;
	textAlign?: string;
	width?: number | string;
}

export interface ITableFilter {
	'page-size': number;
	'page-number': number;
	'order-by-column': string;
	'order-by-direction': string;
}
