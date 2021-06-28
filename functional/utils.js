describe('sum', () => {
    it('adds 20 and 10 into 30', () => {
        assert.strictEqual(30, sum([20, 10]));
    });
    it('adds 20, 10 and 3.5 into 33.5', () => {
        assert.strictEqual(33.5, sum([20, 10, 3.5]));
    });
    it('returns 0 to empty array input', () => {
        assert.strictEqual(0, sum([]));
    });
    it('returns undefined to undefined input', () => {
        assert.strictEqual(undefined, sum(undefined));
    });
});

describe('reverse', () => {
    it('reverses a string', () => {
        assert.strictEqual('denifednu', reverse('undefined'));
    });
    it('reverses a number (previous type conversion)', () => {
        assert.strictEqual('4321', reverse(1234));
    });
    it('returns empty string for empty string input', () => {
        assert.strictEqual('', reverse(''));
    });
    it('returns undefined for undefined input', () => {
        assert.strictEqual(undefined, reverse(undefined));
    });
});

describe('filterLongWords', () => {
    it('returns [\'nene\'] for ([\'nene\', \'a\', \'\'], 2) input', () => {
        expect(filterLongWords(['nene', 'a', ''], 2)).to.have.same.members(['nene']);
    });
    it('returns [1234] for ([1234, \'art\', \'tar\'], 2) input', () => {
        expect(filterLongWords([1234, 'art', 'tar'], 3)).to.have.same.members([1234]);
    });
    it('returns empty array for ([1234, \'art\', \'tar\'], 6) input', () => {
        expect(filterLongWords([1234, 'art', 'tar'], 6)).to.have.same.members([]);
    });
    it('returns empty array for empty array input', () => {
        expect(filterLongWords([], 5)).to.have.same.members([]);
    });
    it('returns undefined for non-number i input', () => {
        assert.strictEqual(undefined, filterLongWords([1234, 'art', 'tar'], 'r'));
    });
    it('returns undefined for undefined input', () => {
        assert.strictEqual(undefined, filterLongWords(undefined, 0));
    });
});

// Define a function sum() and a function multiply() that sums and multiplies
//   (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4])
//   should return 10, and multiply([1,2,3,4]) should return 24.
function sum(arr) {
    return !arr ? undefined : arr.reduce(function (acc, elem) { return acc + elem; }, 0);
}

// Define a function reverse() that computes the reversal of a string
//   For example, reverse('jag testar') should return the string 'ratset gaj'
function reverse(str) {
    if (str === undefined) return undefined;
    str = (' ' + str).slice(1);
    return str.split('').map((_, i, array) => array[array.length - i -1]).join('');
}

// Write a function filterLongWords() that takes an array of words
//   and an integer i and returns the array of words that are longer than i.
function filterLongWords(arrayOfWords, i) {
    if (!arrayOfWords || typeof i !== "number") return undefined;
    return arrayOfWords.filter(function (word, idx, array) {
        return ('' + word).length > i;
    }, []);
}

window.onload = () => {
    // Homepage
    const homepage = document.getElementById('homepage');
    homepage.onclick = function() { location.href = '/'; };
};
