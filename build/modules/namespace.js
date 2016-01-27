var selector,
    $ = (string) => {
        return selector(string);
    };
//avoid
global.$ = $;
global.ACID = $;
