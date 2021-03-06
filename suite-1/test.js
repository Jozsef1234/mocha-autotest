'use strict';

before('Opening EPAM site', function () {
    driver.get('https://www.epam.com/careers');
    return driver.sleep(4000);
});

describe('Smoke suite', function () {
    const commonParent = '.section--hide-on-mobile ';
    let keyWordOrIDInput = driver.findElement(by.css(commonParent + '.job-search__input'));
    let findButton = driver.findElement(by.css(commonParent + '.job-search__submit'));

    describe('Sanity check', function () {
        let epamLogo = driver.findElement(by.css('.header__logo'));
        it('EPAM carreer page should open, with a visible logo on the page', function () {
            return expect(epamLogo.isDisplayed()).to.eventually.be.true;
        });
    });

    describe('All the main elements should be visible on Carreer page', function () {
        let keyWordOrIDInput = driver.findElement(by.css(commonParent + '.job-search__input'));
        let locationDropdown = driver.findElement(by.css(commonParent + '.select-box-selection'));
        let skillsSelector = driver.findElement(by.css(commonParent + '.multi-select-filter'));

        it('The "Keyword or job ID" input field should be visible', function () {
            return expect(keyWordOrIDInput.isDisplayed()).to.eventually.be.true;
        });

        it('The "Location" dropdown should be visible', function () {
            return expect(locationDropdown.isDisplayed()).to.eventually.be.true;
        });

        it('The "Skills" selector should be visible', function () {
            return expect(skillsSelector.isDisplayed()).to.eventually.be.true;
        });

        it('The "Find" button should be visible', function () {
            return expect(findButton.isDisplayed()).to.eventually.be.true;
        });
    });

    describe('Checking a search result list', function () {
        const keyWord = "Test Automation Engineer";
        const searchResultHeadingLocator = '.search-result__heading';

        it('When the "Test Automation engineer" keyword is typed into the search field', function () {
            return keyWordOrIDInput.sendKeys(keyWord);
        });

        it('And the "Find" button is clicked', function () {
            findButton.click();
            driver.sleep(6000);
            return driver.wait(function () {
                return driver.findElement(by.css(searchResultHeadingLocator)).isDisplayed();
            });
        });

        it('Then the search result list heading should contain the searched searchterm', function () {
            return expect(driver.findElement(by.css(searchResultHeadingLocator)).getText()).to.eventually.include(keyWord.toUpperCase());
        });
    });

    describe('Homework', function () {
        xit('Please choose one task/scenario from prevoius class\' in place of this one and implement it!' +
            '\n\tMake sure to add a short description in comments as well!', function () {

            });
    });

    after('Closing browser instance', function () {
        return driver.quit();
    });
});