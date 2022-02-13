import { shallow } from 'enzyme';
import Counter from './components/Counter/Counter';


describe('Counter Testing', () => {

	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<Counter />); //assign wrapper here so can be used in each test.
	})

	test('render the title of counter', () => {
		expect(wrapper.find('h1').text()).toContain('This is a counter app'); 
		//with enzyme you can grab anything from the html and perform functions on it
	});

	test('render a button with text of `increment`', () => {
		expect(wrapper.find('#increment-btn').text()).toBe('Increment');
	})

	test('render a button with text of `decrement`', () => {
	expect(wrapper.find('#decrement-btn').text()).toBe('Decrement');
})

	test('render the initial value of state in a div', () => {
		expect(wrapper.find('#counter-value').text()).toBe('0'); 
		
	})

	test('will render the click event of increment button and increment counter value', () => {
		wrapper.find('#increment-btn').simulate('click');
		expect(wrapper.find('#counter-value').text()).toBe('1'); 
	})

	test('will render the click event of decrement button and decrement counter value', () => {
		wrapper.find('#increment-btn').simulate('click');
		expect(wrapper.find('#counter-value').text()).toBe('1'); 
		wrapper.find('#decrement-btn').simulate('click');
		expect(wrapper.find('#counter-value').text()).toBe('0'); 
	})

	test('will not let the counter go below 0', () => {
		wrapper.find('#decrement-btn').simulate('click');
		expect(wrapper.find('#counter-value').text()).toBe('0'); 
	})
});


