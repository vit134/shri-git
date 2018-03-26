const assert = require('chai').assert;
const url = 'http://localhost:3000';

describe('Главная страница', () => {
	describe('Главная страница', () => {
		it('Должен быть title === Express', () => {
			browser.url(url);
			assert(browser.getTitle() === 'Express');
		});
	});

	describe('Главная страница', () => {
		it('Количество веток больше 0', () => {
			browser.url(url);

			let branchCount = browser.selectorExecute('.branches__link', function(link) {
				return link.length;
			});

			assert(branchCount > 0);
		});
	});

	describe('Главная страница', () => {
		it('Отображается ветка по умолчанию', () => {
			browser.url(url);

			let branchCurrent = browser.selectorExecute('.branches__link.current', function(link) {
				return link.length;
			});

			assert(branchCurrent > 0);
		});
	});
});