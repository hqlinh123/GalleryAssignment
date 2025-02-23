describe('Login Screen Test', () => {
    beforeAll(async () => {
        await device.launchApp({ newInstance: true });
    });

    it('should login successfully', async () => {
        await expect(element(by.id('email'))).toBeVisible();
        await element(by.id('email')).typeText('test@example.com');

        await expect(element(by.id('password'))).toBeVisible();
        await element(by.id('password')).typeText('password123');

        await expect(element(by.id('login-button'))).toBeVisible();
        await element(by.id('login-button')).tap();

        // Wait for navigation to dashboard
        await expect(element(by.text('Dashboard'))).toBeVisible();
    });
});
