const { range, of, interval } = rxjs;
const { map, filter, merge, take } = rxjs.operators;

const blah1$ = interval(1000);
const blah2$ = interval(3000);

const blah3$ = blah1$.pipe(
    merge(blah2$),
    take(20)
)

blah3$.subscribe((x) => {
    console.log(x);
})
