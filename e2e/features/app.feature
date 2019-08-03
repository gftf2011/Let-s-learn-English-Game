Feature: I will validate application interface

@PageTitleValidation
Scenario: Test Application logo title

Given I will enter the application url
Then I will check if logo title is "Let's learn English!"

@ModalDefaultDisplayValidation
Scenario: Test if modal background has display none

Given I will enter the application url
Then I will check if modal background has display "none"

@ModalBodyMessageValidation
Scenario: Test modal body message

Given I will enter the application url
When I will click the verify button
Then I will check if modal body message is "A resposta está errada!"

@LifeTrysValidationValidation
Scenario: Test if display empty heart after wrong answer

Given I will enter the application url
When I will click the verify button
And I will click the close button from modal footer
Then I will check if has "0" empty hearts present