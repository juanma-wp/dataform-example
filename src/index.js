/**
 * WordPress dependencies
 */
import domReady from "@wordpress/dom-ready";
import { createRoot } from "@wordpress/element";
import { DataForm } from '@wordpress/dataviews';

const noop = () => {};

const fields = [
	{
		id: 'title',
		label: 'Title',
		type: 'text',
	},
	{
		id: 'order',
		label: 'Order',
		type: 'integer',
	},
	{
		id: 'author',
		label: 'Author',
		type: 'integer',
		elements: [
			{ value: 1, label: 'Jane' },
			{ value: 2, label: 'John' },
		],
	},
];

const form = {
	fields: [ 'title', 'order', 'author' ],
};

const data = {
	title: 'Hello World',
	author: 1,
	order: 1,
};

const SimpleDataForm = () => {

	return (
		<div>
			<DataForm
				data={ data }
				fields={ fields }
				form={ form }
				onChange={ noop }
			/>
		</div>
	);
};

domReady( () => {
	const root = document.getElementById( 'dataform-example-root' );
	if ( root ) {
		createRoot( root ).render( <SimpleDataForm /> );
	}
} );
