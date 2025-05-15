import { TextShortenerPipe } from './text-shortener.pipe';

describe('TextShortenerPipe', () => {
  const pipe = new TextShortenerPipe();

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return the original text if shorter than limit', () => {
    const result = pipe.transform('Hello world', 20);
    expect(result).toBe('Hello world');
  });

  it('should shorten text and add ellipsis if longer than limit', () => {
    const result = pipe.transform('This is a very long sentence that needs to be shortened.', 20);
    expect(result).toBe('This is a very long ...');
  });

  it('should handle empty input', () => {
    const result = pipe.transform('', 10);
    expect(result).toBe('');
  });
});
