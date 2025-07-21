describe('Mi primer test', () => {
    it('Debería abrir Google', async () => {
        await browser.url('https://www.google.com');
        const url = await browser.getUrl();
        expect(url).toContain('google');
    });
});
