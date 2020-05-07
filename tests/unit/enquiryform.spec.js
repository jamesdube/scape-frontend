import { mount } from "@vue/test-utils";
import Form from "@/components/EnquiryForm3.vue";
import faker from 'faker'

describe("Enquiry Form", () => {
	
	it("it shows list of subjects", () => {
		const fakeSubject = faker.random.arrayElement([ { name: 'Geography', code: 'GEO' },{ name: 'Shone', code: 'SHO' } ])
		const subjects = [
			{ name: 'Mathematics', code: 'MAT' },
			{ name: 'Biology', code: 'BIO' },
			{ name: 'History', code: 'HIS' },
			fakeSubject
		]
		const wrapper = mount(Form, {
			propsData: { subjects }
		});
		expect(wrapper.text()).toMatch('Mathematics');
		expect(wrapper.text()).toMatch('History');
		expect(wrapper.text()).toMatch(fakeSubject.name);
	});
});