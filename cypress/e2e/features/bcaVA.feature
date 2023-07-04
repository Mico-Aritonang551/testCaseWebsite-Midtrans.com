Feature: Make a payment with BCA VA

    As a valid user
    i want to make a payment with BCA VA

    Scenario: Payment successful
    Given user berada di halaman pembayaran
    When user menekan jenis pembayaran virtual account
    And user memilih pembayaran dengan BCA VA
    Then user mendapatkan BCA VA Number

