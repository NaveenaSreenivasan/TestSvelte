import { S as SvelteComponentDev, i as init, s as safe_not_equal, e as element, t as text, c as claim_element, b as children, d as claim_text, f as detach, h as add_location, j as insert, k as append, w as set_data, a as space, D as listen, n as noop, E as destroy_each, F as run_all, G as validate_store, H as subscribe } from './chunk.107bc870.js';
import './chunk.ffa160eb.js';
import { a as col, b as arrcheck } from './chunk.013f23a1.js';

/* src/routes/about.svelte generated by Svelte v3.6.3 */

const file = "src/routes/about.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = Object.create(ctx);
	child_ctx.item = list[i];
	return child_ctx;
}

function get_each_context_1(ctx, list, i) {
	const child_ctx = Object.create(ctx);
	child_ctx.val = list[i];
	child_ctx.i = i;
	return child_ctx;
}

// (48:1) {#each $arrcheck as val,i}
function create_each_block_1(ctx) {
	var h3, t_value = ctx.val, t;

	return {
		c: function create() {
			h3 = element("h3");
			t = text(t_value);
			this.h();
		},

		l: function claim(nodes) {
			h3 = claim_element(nodes, "H3", {}, false);
			var h3_nodes = children(h3);

			t = claim_text(h3_nodes, t_value);
			h3_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			add_location(h3, file, 48, 0, 854);
		},

		m: function mount(target, anchor) {
			insert(target, h3, anchor);
			append(h3, t);
		},

		p: function update(changed, ctx) {
			if ((changed.$arrcheck) && t_value !== (t_value = ctx.val)) {
				set_data(t, t_value);
			}
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(h3);
			}
		}
	};
}

// (63:2) {#each $col as item}
function create_each_block(ctx) {
	var li, t_value = ctx.item, t;

	return {
		c: function create() {
			li = element("li");
			t = text(t_value);
			this.h();
		},

		l: function claim(nodes) {
			li = claim_element(nodes, "LI", {}, false);
			var li_nodes = children(li);

			t = claim_text(li_nodes, t_value);
			li_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			add_location(li, file, 63, 4, 1118);
		},

		m: function mount(target, anchor) {
			insert(target, li, anchor);
			append(li, t);
		},

		p: function update(changed, ctx) {
			if ((changed.$col) && t_value !== (t_value = ctx.item)) {
				set_data(t, t_value);
			}
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(li);
			}
		}
	};
}

function create_fragment(ctx) {
	var t0, h1, t1, t2, p, t3, t4, t5, h3, t6_value = ctx.$arrcheck.length, t6, t7, button0, t8, t9, button1, t10, t11, ol, dispose;

	var each_value_1 = ctx.$arrcheck;

	var each_blocks_1 = [];

	for (var i = 0; i < each_value_1.length; i += 1) {
		each_blocks_1[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
	}

	var each_value = ctx.$col;

	var each_blocks = [];

	for (var i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	return {
		c: function create() {
			t0 = space();
			h1 = element("h1");
			t1 = text("About this site");
			t2 = space();
			p = element("p");
			t3 = text("This is the 'about' page. There's not much here.");
			t4 = space();

			for (var i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].c();
			}

			t5 = space();
			h3 = element("h3");
			t6 = text(t6_value);
			t7 = space();
			button0 = element("button");
			t8 = text("Change arr");
			t9 = space();
			button1 = element("button");
			t10 = text("Push");
			t11 = space();
			ol = element("ol");

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}
			this.h();
		},

		l: function claim(nodes) {
			t0 = claim_text(nodes, "\n\n");

			h1 = claim_element(nodes, "H1", {}, false);
			var h1_nodes = children(h1);

			t1 = claim_text(h1_nodes, "About this site");
			h1_nodes.forEach(detach);
			t2 = claim_text(nodes, "\n\n");

			p = claim_element(nodes, "P", {}, false);
			var p_nodes = children(p);

			t3 = claim_text(p_nodes, "This is the 'about' page. There's not much here.");
			p_nodes.forEach(detach);
			t4 = claim_text(nodes, "\n\n ");

			for (var i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].l(nodes);
			}

			t5 = claim_text(nodes, "\n");

			h3 = claim_element(nodes, "H3", {}, false);
			var h3_nodes = children(h3);

			t6 = claim_text(h3_nodes, t6_value);
			h3_nodes.forEach(detach);
			t7 = claim_text(nodes, "\n\n\n\n\n");

			button0 = claim_element(nodes, "BUTTON", {}, false);
			var button0_nodes = children(button0);

			t8 = claim_text(button0_nodes, "Change arr");
			button0_nodes.forEach(detach);
			t9 = claim_text(nodes, " \n\n");

			button1 = claim_element(nodes, "BUTTON", {}, false);
			var button1_nodes = children(button1);

			t10 = claim_text(button1_nodes, "Push");
			button1_nodes.forEach(detach);
			t11 = claim_text(nodes, "\n");

			ol = claim_element(nodes, "OL", {}, false);
			var ol_nodes = children(ol);

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(ol_nodes);
			}

			ol_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			document.title = "About";
			add_location(h1, file, 43, 0, 743);
			add_location(p, file, 45, 0, 769);
			add_location(h3, file, 50, 0, 879);
			add_location(button0, file, 58, 0, 995);
			add_location(button1, file, 60, 0, 1048);
			add_location(ol, file, 61, 0, 1086);

			dispose = [
				listen(button0, "click", changearr),
				listen(button1, "click", push)
			];
		},

		m: function mount(target, anchor) {
			insert(target, t0, anchor);
			insert(target, h1, anchor);
			append(h1, t1);
			insert(target, t2, anchor);
			insert(target, p, anchor);
			append(p, t3);
			insert(target, t4, anchor);

			for (var i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].m(target, anchor);
			}

			insert(target, t5, anchor);
			insert(target, h3, anchor);
			append(h3, t6);
			insert(target, t7, anchor);
			insert(target, button0, anchor);
			append(button0, t8);
			insert(target, t9, anchor);
			insert(target, button1, anchor);
			append(button1, t10);
			insert(target, t11, anchor);
			insert(target, ol, anchor);

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(ol, null);
			}
		},

		p: function update(changed, ctx) {
			if (changed.$arrcheck) {
				each_value_1 = ctx.$arrcheck;

				for (var i = 0; i < each_value_1.length; i += 1) {
					const child_ctx = get_each_context_1(ctx, each_value_1, i);

					if (each_blocks_1[i]) {
						each_blocks_1[i].p(changed, child_ctx);
					} else {
						each_blocks_1[i] = create_each_block_1(child_ctx);
						each_blocks_1[i].c();
						each_blocks_1[i].m(t5.parentNode, t5);
					}
				}

				for (; i < each_blocks_1.length; i += 1) {
					each_blocks_1[i].d(1);
				}
				each_blocks_1.length = each_value_1.length;
			}

			if ((changed.$arrcheck) && t6_value !== (t6_value = ctx.$arrcheck.length)) {
				set_data(t6, t6_value);
			}

			if (changed.$col) {
				each_value = ctx.$col;

				for (var i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(changed, child_ctx);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(ol, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}
				each_blocks.length = each_value.length;
			}
		},

		i: noop,
		o: noop,

		d: function destroy(detaching) {
			if (detaching) {
				detach(t0);
				detach(h1);
				detach(t2);
				detach(p);
				detach(t4);
			}

			destroy_each(each_blocks_1, detaching);

			if (detaching) {
				detach(t5);
				detach(h3);
				detach(t7);
				detach(button0);
				detach(t9);
				detach(button1);
				detach(t11);
				detach(ol);
			}

			destroy_each(each_blocks, detaching);

			run_all(dispose);
		}
	};
}

function push(){
col.update(val => [...val, Date.now()]);
}

function changearr(){

ibill.splice(0,1)
;
}

function instance($$self, $$props, $$invalidate) {
	let $arrcheck, $col;

	validate_store(arrcheck, 'arrcheck');
	subscribe($$self, arrcheck, $$value => { $arrcheck = $$value; $$invalidate('$arrcheck', $arrcheck); });
	validate_store(col, 'col');
	subscribe($$self, col, $$value => { $col = $$value; $$invalidate('$col', $col); });

	return { $arrcheck, $col };
}

class About extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, []);
	}
}

export default About;