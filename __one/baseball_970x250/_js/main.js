import {b_728x90} from '../../_common/js/common.js'



const tl = new TimelineMax()
tl.add("t1")
tl.from(".t1a", {duration:.17, y:"-=130"}, "t1")
tl.from(".t1b", {duration:.17, y:"+=130"}, "t1+=.4")

b_728x90(tl)
