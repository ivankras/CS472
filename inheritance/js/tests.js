// Exercise 1
describe('String.filter', () => {
    it('removes banned word \'hello\' from \'hello world\' returning \'world\'', () => {
        assert.strictEqual('world', 'hello world'.filter('hello'));
    });

    it('removes banned word \'any\' from \'Choose any colors\' returning \'Choose colors\'', () => {
        assert.strictEqual('Choose colors', 'Choose any colors'.filter('any'));
    });

    it('returns same string if input is empty', () => {
        assert.strictEqual('Choose colors', 'Choose colors'.filter(''));
    });

    it('returns same string if input is undefined', () => {
        assert.strictEqual('Choose colors', 'Choose colors'.filter(undefined));
    });
});

// Exercise 2
describe('Array.bubbleSort', () => {
    it('orders [1, 9, 2, 7] into [1, 2, 7, 9]', () => {
        expect([1, 9, 2, 7].bubbleSort()).to.have.same.members([1, 2, 7, 9]);
    });

    it('orders [\'hu\', \'ho\', \'hi\'] into [\'hi\', \'ho\', \'hu\']', () => {
        expect(['hu', 'ho', 'hi'].bubbleSort()).to.have.same.members(['hi', 'ho', 'hu']);
    });

    it('return empty string for empty string origin', () => {
        expect([].bubbleSort()).to.have.same.members([]);
    });
});

// Exercise 3
describe('Teacher.teach', () => {
    it('Charles is teaching HEMA', () => {
        const charles = new Teacher();
        charles.initialize('Charles', 45);
        assert.strictEqual(charles.teach('HEMA'), 'Charles is teaching HEMA');
    });

    it('Helga is teaching boring stuff', () => {
        const helga = new Teacher();
        helga.initialize('Helga', 1000);
        assert.strictEqual(helga.teach('boring stuff'), 'Helga is teaching boring stuff');
    });

    it('No one is teaching stuff', () => {
        const noone = new Teacher();
        noone.initialize('', 1000);
        assert.strictEqual(noone.teach('boring stuff'), ' is teaching boring stuff');
    });

    it('Helga is teaching nothing', () => {
        const helga = new Teacher();
        helga.initialize('Helga', 1000);
        assert.strictEqual(helga.teach(''), 'Helga is teaching ');
    });

    it('Helga cannot teach undefined', () => {
        const helga = new Teacher();
        helga.initialize('Helga', 1000);
        assert.strictEqual(helga.teach(undefined), undefined);
    });
});
