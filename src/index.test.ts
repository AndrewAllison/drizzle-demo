describe('sayHello Function', () => {
  it('prints "Hello!!"', () => {
    console.log = jest.fn();

    const sayHello = () => {
      console.log('Hello!!');
    };

    sayHello();
    expect(console.log).toHaveBeenCalledWith('Hello!!');
  });
});
