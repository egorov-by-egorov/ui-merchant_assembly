interface IOrdersDataPopover {
	label: string;
	value: string;
}

interface IOrdersDataGood {
	rowGoodMainFieldsAdditional: {
		uid: string;
	};
	rowGoodMainFields: {
		name: string;
		vendorCode: string;
		'container-place': string;
		type: string;
		quantity: string;
		price: string;
	};
}

export interface IOrdersData {
	rowMainFieldsAdditional: {
		uid: string;
	};
	rowMainFields: {
		barcode: {
			value: string;
			popover?: Array<IOrdersDataPopover>;
			link?: string;
		};
		'customer-order-number': {
			value: string;
			popover?: Array<IOrdersDataPopover>;
			link?: string;
		};
		'moment-order-created-utc': {
			value: string;
			popover?: Array<IOrdersDataPopover>;
		};
		'direction-type': {
			value: string;
			popover?: Array<IOrdersDataPopover>;
		};
		service: {
			value: string;
			popover?: Array<IOrdersDataPopover>;
		};
		status: {
			value: string;
			popover?: Array<IOrdersDataPopover>;
		};
		'legacy-global-dimension-to-region-code': {
			value: string;
			popover?: Array<IOrdersDataPopover>;
		};
		'legacy-delivery-date-utc': {
			value: string;
			popover?: Array<IOrdersDataPopover>;
		};
		'recipient-name': {
			value: string;
			popover?: Array<IOrdersDataPopover>;
		};
		'price-total': {
			value: string;
			popover?: Array<IOrdersDataPopover>;
		};
	};
	rowGoodsFields: Array<IOrdersDataGood>;
}
