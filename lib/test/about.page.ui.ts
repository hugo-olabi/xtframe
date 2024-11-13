import { a, look, route } from "../src";

const { px, color, styling } = look;

const S = styling();

S.$(`#header:after`, {
    width: px(100),
    height: 100,
    color: color.aliceblue
})

S.$(`#header:after`, {
    width: px(100),
    height: 100
})

S.mid(`(max-width: 600px)`, {

})

S.anim("bliking", {
    from: {
        marginTop: px(50),
        marginBottom: px(50),
    },
    to: {
        marginTop: px(0),
        marginBottom: px(0),
    }
})

S.anim("bumping", {
    10: {
        marginTop: px(50),
        marginBottom: px(50),
    },
    20: {
        marginTop: px(0),
        marginBottom: px(0),
    }
}
)