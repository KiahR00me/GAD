(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [93287], {
        508: (n, a, o) => {
            "use strict";
            o.r(a), o.d(a, {
                default: () => nv
            });
            var e, s, t, i, c, r, p, l, d, m, u, h, g, A, y, x, k, f, b, v, S, T = {};
            o.r(T), o.d(T, {
                accordionActionsClasses: () => U,
                default: () => V,
                getAccordionActionsUtilityClass: () => $
            });
            var C = {};
            o.r(C), o.d(C, {
                demoComponents: () => nf,
                demos: () => nk,
                docs: () => nx,
                srcComponents: () => nb
            });
            var w = o(53630),
                D = o.n(w),
                j = o(65014),
                I = o.t(j, 2),
                M = o(11033),
                E = o(98345),
                L = o(57623),
                P = o(93328),
                B = o(9281),
                R = o(85618),
                q = o(69649),
                H = o(59024),
                z = o(13732),
                F = o(52840);

            function $(n) {
                return (0, F.Ay)("MuiAccordionActions", n)
            }
            let U = (0, z.A)("MuiAccordionActions", ["root", "spacing"]);
            var N = o(21814),
                G = ["className", "disableSpacing"],
                Z = function(n) {
                    var a = n.classes,
                        o = n.disableSpacing;
                    return (0, R.A)({
                        root: ["root", !o && "spacing"]
                    }, $, a)
                },
                _ = (0, q.Ay)("div", {
                    name: "MuiAccordionActions",
                    slot: "Root",
                    overridesResolver: function(n, a) {
                        var o = n.ownerState;
                        return [a.root, !o.disableSpacing && a.spacing]
                    }
                })({
                    display: "flex",
                    alignItems: "center",
                    padding: 8,
                    justifyContent: "flex-end",
                    variants: [{
                        props: function(n) {
                            return !n.disableSpacing
                        },
                        style: {
                            "& > :not(style) ~ :not(style)": {
                                marginLeft: 8
                            }
                        }
                    }]
                });
            let V = j.forwardRef(function(n, a) {
                var o = (0, H.b)({
                        props: n,
                        name: "MuiAccordionActions"
                    }),
                    e = o.className,
                    s = o.disableSpacing,
                    t = (0, P.A)(o, G),
                    i = D()(D()({}, o), {}, {
                        disableSpacing: void 0 !== s && s
                    }),
                    c = Z(i);
                return (0, N.jsx)(_, D()({
                    className: (0, B.default)(c.root, e),
                    ref: a,
                    ownerState: i
                }, t))
            });
            var O = o(56698),
                W = o(23180),
                K = o(88925),
                Y = o(39337),
                X = o(57628),
                J = o(85235),
                Q = o(77272),
                nn = o(48566),
                na = o(91e3),
                no = o(40253),
                ne = o(83622),
                ns = o(69036),
                nt = o(1100),
                ni = o(88734),
                nc = o(4208),
                nr = o(92093),
                np = o(47001),
                nl = o(63780),
                nd = o(95202),
                nm = o(55424),
                nu = o(39362),
                nh = (0, q.Ay)(function(n) {
                    return (0, N.jsx)(ne.A, D()({
                        disableGutters: !0,
                        elevation: 0,
                        square: !0
                    }, n))
                })(function(n) {
                    var a = n.theme;
                    return {
                        border: "1px solid ".concat(a.palette.divider),
                        "&:not(:last-child)": {
                            borderBottom: 0
                        },
                        "&::before": {
                            display: "none"
                        }
                    }
                }),
                ng = (0, q.Ay)(function(n) {
                    return (0, N.jsx)(ns.A, D()({
                        expandIcon: (0, N.jsx)(no.default, {
                            sx: {
                                fontSize: "0.9rem"
                            }
                        })
                    }, n))
                })(function(n) {
                    var a, o = n.theme;
                    return D()((a = {
                        backgroundColor: "rgba(0, 0, 0, .03)",
                        flexDirection: "row-reverse"
                    }, (0, nr.A)(a, "& .".concat(nu.A.expandIconWrapper, ".").concat(nu.A.expanded), {
                        transform: "rotate(90deg)"
                    }), (0, nr.A)(a, "& .".concat(nu.A.content), {
                        marginLeft: o.spacing(1)
                    }), a), o.applyStyles("dark", {
                        backgroundColor: "rgba(255, 255, 255, .05)"
                    }))
                }),
                nA = (0, q.Ay)(nt.A)(function(n) {
                    return {
                        padding: n.theme.spacing(2),
                        borderTop: "1px solid rgba(0, 0, 0, .125)"
                    }
                }),
                ny = o(35314),
                nx = {
                    en: {
                        description: "The Accordion component lets users show and hide sections of related content on a page.",
                        location: "/docs/data/material/components/accordion/accordion.md",
                        rendered: ['<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n<symbol id="error-icon" viewBox="0 0 20 20">\n<path fill-rule="evenodd" d="M2 7.4v5.2a2 2 0 0 0 .586 1.414l3.4 3.4A2 2 0 0 0 7.4 18h5.2a2 2 0 0 0 1.414-.586l3.4-3.4A2 2 0 0 0 18 12.6V7.4a2 2 0 0 0-.586-1.414l-3.4-3.4A2 2 0 0 0 12.6 2H7.4a2 2 0 0 0-1.414.586l-3.4 3.4A2 2 0 0 0 2 7.4Zm11.03-.43a.75.75 0 0 1 0 1.06L11.06 10l1.97 1.97a.75.75 0 1 1-1.06 1.06L10 11.06l-1.97 1.97a.75.75 0 0 1-1.06-1.06L8.94 10 6.97 8.03a.75.75 0 0 1 1.06-1.06L10 8.94l1.97-1.97a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd"/>\n</symbol>\n</svg>', '<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n<symbol id="warning-icon" viewBox="0 0 20 20">\n<path d="M2.33 17a.735.735 0 0 1-.665-.375.631.631 0 0 1-.094-.375.898.898 0 0 1 .115-.396L9.353 3.062a.621.621 0 0 1 .281-.27.85.85 0 0 1 .729 0 .622.622 0 0 1 .281.27l7.667 12.792c.07.125.108.257.114.396a.63.63 0 0 1-.093.375.842.842 0 0 1-.271.27.728.728 0 0 1-.394.105H2.33Zm7.664-2.5c.211 0 .39-.072.536-.214a.714.714 0 0 0 .218-.532.736.736 0 0 0-.214-.535.714.714 0 0 0-.531-.22.736.736 0 0 0-.536.215.714.714 0 0 0-.219.531c0 .212.072.39.215.536.143.146.32.219.531.219Zm0-2.5c.211 0 .39-.072.536-.216a.72.72 0 0 0 .218-.534v-2.5a.728.728 0 0 0-.214-.534.72.72 0 0 0-.531-.216.734.734 0 0 0-.536.216.72.72 0 0 0-.219.534v2.5c0 .212.072.39.215.534a.72.72 0 0 0 .531.216Z"/>\n</symbol>\n</svg>', '<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n<symbol id="success-icon" viewBox="0 0 20 20">\n<path d="m8.938 10.875-1.25-1.23a.718.718 0 0 0-.521-.228.718.718 0 0 0-.521.229.73.73 0 0 0 0 1.062l1.77 1.771c.153.153.327.23.521.23a.718.718 0 0 0 .521-.23l3.896-3.896a.73.73 0 0 0 0-1.062.718.718 0 0 0-.52-.23.718.718 0 0 0-.521.23l-3.376 3.354ZM10 18a7.796 7.796 0 0 1-3.104-.625 8.065 8.065 0 0 1-2.552-1.719 8.064 8.064 0 0 1-1.719-2.552A7.797 7.797 0 0 1 2 10c0-1.111.208-2.15.625-3.115a8.064 8.064 0 0 1 4.27-4.26A7.797 7.797 0 0 1 10 2c1.111 0 2.15.208 3.115.625a8.096 8.096 0 0 1 4.26 4.26C17.792 7.851 18 8.89 18 10a7.797 7.797 0 0 1-.625 3.104 8.066 8.066 0 0 1-4.26 4.271A7.774 7.774 0 0 1 10 18Z"/>\n</symbol>\n</svg>', '<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n<symbol id="info-icon" viewBox="0 0 20 20">\n<path d="M9.996 14c.21 0 .39-.072.535-.216a.72.72 0 0 0 .219-.534v-3.5a.728.728 0 0 0-.214-.534.72.72 0 0 0-.532-.216.734.734 0 0 0-.535.216.72.72 0 0 0-.219.534v3.5c0 .213.071.39.214.534a.72.72 0 0 0 .532.216Zm0-6.5c.21 0 .39-.071.535-.214a.714.714 0 0 0 .219-.532.736.736 0 0 0-.214-.535.714.714 0 0 0-.532-.219.736.736 0 0 0-.535.214.714.714 0 0 0-.219.532c0 .21.071.39.214.535.143.146.32.219.532.219Zm.01 10.5a7.81 7.81 0 0 1-3.11-.625 8.065 8.065 0 0 1-2.552-1.719 8.066 8.066 0 0 1-1.719-2.551A7.818 7.818 0 0 1 2 9.99c0-1.104.208-2.14.625-3.105a8.066 8.066 0 0 1 4.27-4.26A7.818 7.818 0 0 1 10.009 2a7.75 7.75 0 0 1 3.106.625 8.083 8.083 0 0 1 4.26 4.265A7.77 7.77 0 0 1 18 9.994a7.81 7.81 0 0 1-.625 3.11 8.066 8.066 0 0 1-1.719 2.552 8.083 8.083 0 0 1-2.546 1.719 7.77 7.77 0 0 1-3.104.625Z"/>\n</symbol>\n</svg>', '<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n<symbol id="copied-icon" viewBox="0 0 24 24">\n<path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.24 11.28L9.69 11.2c-.38-.39-.38-1.01 0-1.4.39-.39 1.02-.39 1.41 0l1.36 1.37 4.42-4.46c.39-.39 1.02-.39 1.41 0 .38.39.38 1.01 0 1.4l-5.13 5.17c-.37.4-1.01.4-1.4 0zM3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1z" />\n</symbol>\n</svg>', '<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n<symbol id="copy-icon" viewBox="0 0 24 24">\n<path d="M15 20H5V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1zm5-4V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2zm-2 0H9V4h9v12z" />\n+</symbol>\n</svg>', '<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n<symbol id="anchor-link-icon" viewBox="0 0 12 6">\n<path d="M8.9176 0.083252H7.1676C6.84677 0.083252 6.58427 0.345752 6.58427 0.666585C6.58427 0.987419 6.84677 1.24992 7.1676 1.24992H8.9176C9.8801 1.24992 10.6676 2.03742 10.6676 2.99992C10.6676 3.96242 9.8801 4.74992 8.9176 4.74992H7.1676C6.84677 4.74992 6.58427 5.01242 6.58427 5.33325C6.58427 5.65409 6.84677 5.91659 7.1676 5.91659H8.9176C10.5276 5.91659 11.8343 4.60992 11.8343 2.99992C11.8343 1.38992 10.5276 0.083252 8.9176 0.083252ZM3.6676 2.99992C3.6676 3.32075 3.9301 3.58325 4.25094 3.58325H7.75094C8.07177 3.58325 8.33427 3.32075 8.33427 2.99992C8.33427 2.67909 8.07177 2.41659 7.75094 2.41659H4.25094C3.9301 2.41659 3.6676 2.67909 3.6676 2.99992ZM4.83427 4.74992H3.08427C2.12177 4.74992 1.33427 3.96242 1.33427 2.99992C1.33427 2.03742 2.12177 1.24992 3.08427 1.24992H4.83427C5.1551 1.24992 5.4176 0.987419 5.4176 0.666585C5.4176 0.345752 5.1551 0.083252 4.83427 0.083252H3.08427C1.47427 0.083252 0.167603 1.38992 0.167603 2.99992C0.167603 4.60992 1.47427 5.91659 3.08427 5.91659H4.83427C5.1551 5.91659 5.4176 5.65409 5.4176 5.33325C5.4176 5.01242 5.1551 4.74992 4.83427 4.74992Z" />\n</symbol>\n</svg>', '<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n<symbol id="comment-link-icon" viewBox="0 0 24 24">\n<path d="M22.8481 4C22.8481 2.9 21.9481 2 20.8481 2H4.84814C3.74814 2 2.84814 2.9 2.84814 4V16C2.84814 17.1 3.74814 18 4.84814 18H18.8481L22.8481 22V4ZM16.8481 11H13.8481V14C13.8481 14.55 13.3981 15 12.8481 15C12.2981 15 11.8481 14.55 11.8481 14V11H8.84814C8.29814 11 7.84814 10.55 7.84814 10C7.84814 9.45 8.29814 9 8.84814 9H11.8481V6C11.8481 5.45 12.2981 5 12.8481 5C13.3981 5 13.8481 5.45 13.8481 6V9H16.8481C17.3981 9 17.8481 9.45 17.8481 10C17.8481 10.55 17.3981 11 16.8481 11Z" />\n</symbol>\n</svg>', '<h1>Accordion</h1><p class="description">The Accordion component lets users show and hide sections of related content on a page.</p>\n\n', {
                            component: "@mui/docs/ComponentLinkHeader"
                        }, '<h2 id="introduction"><a href="#introduction" class="title-link-to-anchor">Introduction<span class="anchor-icon"><svg><use xlink:href="#anchor-link-icon" /></svg></span></a><button title="Post a comment" class="comment-link" data-feedback-hash="introduction"><svg><use xlink:href="#comment-link-icon" /></svg></button></h2><p>The Material\xa0UI Accordion component includes several complementary utility components to handle various use cases:</p>\n<ul>\n<li>Accordion: the wrapper for grouping related components.</li>\n<li>Accordion Summary: the wrapper for the Accordion header, which expands or collapses the content when clicked.</li>\n<li>Accordion Details: the wrapper for the Accordion content.</li>\n<li>Accordion Actions: an optional wrapper that groups a set of buttons.</li>\n</ul>\n', {
                            demo: "AccordionUsage.js",
                            bg: !0
                        }, '<aside class="MuiCallout-root MuiCallout-info"><div class="MuiCallout-icon-container">\n<svg focusable="false" aria-hidden="true" viewBox="0 0 24 24">\n<use class="MuiCode-copied-icon" xlink:href="#info-icon" />\n</svg>\n</div><div class="MuiCallout-content"><p>This component is no longer documented in the <a href="https://m2.material.io/" target="_blank" rel="noopener nofollow">Material Design guidelines</a>, but Material\xa0UI will continue to support it.</p>\n</div></aside><h2 id="basics"><a href="#basics" class="title-link-to-anchor">Basics<span class="anchor-icon"><svg><use xlink:href="#anchor-link-icon" /></svg></span></a><button title="Post a comment" class="comment-link" data-feedback-hash="basics"><svg><use xlink:href="#comment-link-icon" /></svg></button></h2><div class="MuiCode-root"><pre><code class="language-jsx"><span class="token keyword">import</span> Accordion <span class="token keyword">from</span> <span class="token string">\'@mui/material/Accordion\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> AccordionDetails <span class="token keyword">from</span> <span class="token string">\'@mui/material/AccordionDetails\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> AccordionSummary <span class="token keyword">from</span> <span class="token string">\'@mui/material/AccordionSummary\'</span><span class="token punctuation">;</span>\n</code></pre><button data-ga-event-category="code" data-ga-event-action="copy-click" aria-label="Copy the code" class="MuiCode-copy"><span class="MuiCode-copy-label">Copy</span><span class="MuiCode-copied-label">Copied</span><span class="MuiCode-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n<h3 id="expand-icon"><a href="#expand-icon" class="title-link-to-anchor">Expand icon<span class="anchor-icon"><svg><use xlink:href="#anchor-link-icon" /></svg></span></a><button title="Post a comment" class="comment-link" data-feedback-hash="expand-icon"><svg><use xlink:href="#comment-link-icon" /></svg></button></h3><p>Use the <code>expandIcon</code> prop on the Accordion Summary component to change the expand indicator icon.\nThe component handles the turning upside-down transition automatically.</p>\n', {
                            demo: "AccordionExpandIcon.js",
                            bg: !0
                        }, '<h3 id="expanded-by-default"><a href="#expanded-by-default" class="title-link-to-anchor">Expanded by default<span class="anchor-icon"><svg><use xlink:href="#anchor-link-icon" /></svg></span></a><button title="Post a comment" class="comment-link" data-feedback-hash="expanded-by-default"><svg><use xlink:href="#comment-link-icon" /></svg></button></h3><p>Use the <code>defaultExpanded</code> prop on the Accordion component to have it opened by default.</p>\n', {
                            demo: "AccordionExpandDefault.js",
                            bg: !0
                        }, '<h3 id="transition"><a href="#transition" class="title-link-to-anchor">Transition<span class="anchor-icon"><svg><use xlink:href="#anchor-link-icon" /></svg></span></a><button title="Post a comment" class="comment-link" data-feedback-hash="transition"><svg><use xlink:href="#comment-link-icon" /></svg></button></h3><p>Use the <code>slots.transition</code> and <code>slotProps.transition</code> props to change the Accordion&#39;s default transition.</p>\n', {
                            demo: "AccordionTransition.js",
                            bg: !0
                        }, '<h3 id="disabled-item"><a href="#disabled-item" class="title-link-to-anchor">Disabled item<span class="anchor-icon"><svg><use xlink:href="#anchor-link-icon" /></svg></span></a><button title="Post a comment" class="comment-link" data-feedback-hash="disabled-item"><svg><use xlink:href="#comment-link-icon" /></svg></button></h3><p>Use the <code>disabled</code> prop on the Accordion component to disable interaction and focus.</p>\n', {
                            demo: "DisabledAccordion.js",
                            bg: !0
                        }, '<h3 id="controlled-accordion"><a href="#controlled-accordion" class="title-link-to-anchor">Controlled Accordion<span class="anchor-icon"><svg><use xlink:href="#anchor-link-icon" /></svg></span></a><button title="Post a comment" class="comment-link" data-feedback-hash="controlled-accordion"><svg><use xlink:href="#comment-link-icon" /></svg></button></h3><p>The Accordion component can be controlled or uncontrolled.</p>\n', {
                            demo: "ControlledAccordions.js",
                            bg: !0
                        }, '<aside class="MuiCallout-root MuiCallout-info"><div class="MuiCallout-icon-container">\n<svg focusable="false" aria-hidden="true" viewBox="0 0 24 24">\n<use class="MuiCode-copied-icon" xlink:href="#info-icon" />\n</svg>\n</div><div class="MuiCallout-content"><ul>\n<li>A component is <strong>controlled</strong> when it&#39;s managed by its parent using props.</li>\n<li>A component is <strong>uncontrolled</strong> when it&#39;s managed by its own local state.</li>\n</ul>\n<p>Learn more about controlled and uncontrolled components in the <a href="https://react.dev/learn/sharing-state-between-components#controlled-and-uncontrolled-components">React documentation</a>.</p>\n</div></aside><h2 id="customization"><a href="#customization" class="title-link-to-anchor">Customization<span class="anchor-icon"><svg><use xlink:href="#anchor-link-icon" /></svg></span></a><button title="Post a comment" class="comment-link" data-feedback-hash="customization"><svg><use xlink:href="#comment-link-icon" /></svg></button></h2><h3 id="only-one-expanded-at-a-time"><a href="#only-one-expanded-at-a-time" class="title-link-to-anchor">Only one expanded at a time<span class="anchor-icon"><svg><use xlink:href="#anchor-link-icon" /></svg></span></a><button title="Post a comment" class="comment-link" data-feedback-hash="only-one-expanded-at-a-time"><svg><use xlink:href="#comment-link-icon" /></svg></button></h3><p>Use the <code>expanded</code> prop with React&#39;s <code>useState</code> hook to allow only one Accordion item to be expanded at a time.\nThe demo below also shows a bit of visual customization.</p>\n', {
                            demo: "CustomizedAccordions.js",
                            bg: !0
                        }, '<h3 id="changing-heading-level"><a href="#changing-heading-level" class="title-link-to-anchor">Changing heading level<span class="anchor-icon"><svg><use xlink:href="#anchor-link-icon" /></svg></span></a><button title="Post a comment" class="comment-link" data-feedback-hash="changing-heading-level"><svg><use xlink:href="#comment-link-icon" /></svg></button></h3><p>By default, the Accordion uses an <code>h3</code> element for the heading. You can change the heading element using the <code>slotProps.heading.component</code> prop to ensure the correct heading hierarchy in your document.</p>\n<div class="MuiCode-root"><pre><code class="language-jsx"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Accordion</span></span> <span class="token attr-name">slotProps</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">heading</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">component</span><span class="token operator">:</span> <span class="token string">\'h4\'</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">AccordionSummary</span></span>\n    <span class="token attr-name">expandIcon</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ExpandMoreIcon</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span></span>\n    <span class="token attr-name">aria-controls</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>panel1-content<span class="token punctuation">"</span></span>\n    <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>panel1-header<span class="token punctuation">"</span></span>\n  <span class="token punctuation">></span></span>\n    Accordion\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">AccordionSummary</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">AccordionDetails</span></span><span class="token punctuation">></span></span>\n    Lorem ipsum dolor sit amet<span class="token punctuation">,</span> consectetur adipiscing elit<span class="token punctuation">.</span> Suspendisse malesuada\n    lacus ex<span class="token punctuation">,</span> sit amet blandit leo lobortis eget<span class="token punctuation">.</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">AccordionDetails</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Accordion</span></span><span class="token punctuation">></span></span>\n</code></pre><button data-ga-event-category="code" data-ga-event-action="copy-click" aria-label="Copy the code" class="MuiCode-copy"><span class="MuiCode-copy-label">Copy</span><span class="MuiCode-copied-label">Copied</span><span class="MuiCode-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n<h2 id="performance"><a href="#performance" class="title-link-to-anchor">Performance<span class="anchor-icon"><svg><use xlink:href="#anchor-link-icon" /></svg></span></a><button title="Post a comment" class="comment-link" data-feedback-hash="performance"><svg><use xlink:href="#comment-link-icon" /></svg></button></h2><p>The Accordion content is mounted by default even if it&#39;s not expanded.\nThis default behavior has server-side rendering and SEO in mind.</p>\n<p>If you render the Accordion Details with a big component tree nested inside, or if you have many Accordions, you may want to change this behavior by setting <code>unmountOnExit</code> to <code>true</code> inside the <code>slotProps.transition</code> prop to improve performance:</p>\n<div class="MuiCode-root"><pre><code class="language-jsx"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Accordion</span></span> <span class="token attr-name">slotProps</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">transition</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">unmountOnExit</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n</code></pre><button data-ga-event-category="code" data-ga-event-action="copy-click" aria-label="Copy the code" class="MuiCode-copy"><span class="MuiCode-copy-label">Copy</span><span class="MuiCode-copied-label">Copied</span><span class="MuiCode-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n<h2 id="accessibility"><a href="#accessibility" class="title-link-to-anchor">Accessibility<span class="anchor-icon"><svg><use xlink:href="#anchor-link-icon" /></svg></span></a><button title="Post a comment" class="comment-link" data-feedback-hash="accessibility"><svg><use xlink:href="#comment-link-icon" /></svg></button></h2><p>The <a href="https://www.w3.org/WAI/ARIA/apg/patterns/accordion/" target="_blank" rel="noopener nofollow">WAI-ARIA guidelines for accordions</a> recommend setting an <code>id</code> and <code>aria-controls</code>, which in this case would apply to the Accordion Summary component.\nThe Accordion component then derives the necessary <code>aria-labelledby</code> and <code>id</code> from its content.</p>\n<div class="MuiCode-root"><pre><code class="language-jsx"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Accordion</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">AccordionSummary</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>panel-header<span class="token punctuation">"</span></span> <span class="token attr-name">aria-controls</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>panel-content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    Header\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">AccordionSummary</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">AccordionDetails</span></span><span class="token punctuation">></span></span>\n    Lorem ipsum dolor sit amet<span class="token punctuation">,</span> consectetur adipiscing elit<span class="token punctuation">.</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">AccordionDetails</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Accordion</span></span><span class="token punctuation">></span></span>\n</code></pre><button data-ga-event-category="code" data-ga-event-action="copy-click" aria-label="Copy the code" class="MuiCode-copy"><span class="MuiCode-copy-label">Copy</span><span class="MuiCode-copied-label">Copied</span><span class="MuiCode-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n<h2 id="anatomy"><a href="#anatomy" class="title-link-to-anchor">Anatomy<span class="anchor-icon"><svg><use xlink:href="#anchor-link-icon" /></svg></span></a><button title="Post a comment" class="comment-link" data-feedback-hash="anatomy"><svg><use xlink:href="#comment-link-icon" /></svg></button></h2><p>The Accordion component consists of a root <code>&lt;div&gt;</code> that contains the Accordion Summary, Accordion Details, and optional Accordion Actions for action buttons.</p>\n<div class="MuiCode-root"><pre><code class="language-jsx"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>MuiAccordion-root<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>MuiAccordion-heading<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>MuiButtonBase-root MuiAccordionSummary-root<span class="token punctuation">"</span></span> <span class="token attr-name">aria-expanded</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> Accordion summary goes here <span class="token operator">--</span><span class="token operator">></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>MuiAccordion-region<span class="token punctuation">"</span></span> <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>region<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>MuiAccordionDetails-root<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> Accordion content goes here <span class="token operator">--</span><span class="token operator">></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n</code></pre><button data-ga-event-category="code" data-ga-event-action="copy-click" aria-label="Copy the code" class="MuiCode-copy"><span class="MuiCode-copy-label">Copy</span><span class="MuiCode-copied-label">Copied</span><span class="MuiCode-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n', '<h2 id="api"><a href="#api" class="title-link-to-anchor">API<span class="anchor-icon"><svg><use xlink:href="#anchor-link-icon" /></svg></span></a><button title="Post a comment" class="comment-link" data-feedback-hash="api"><svg><use xlink:href="#comment-link-icon" /></svg></button></h2><p>See the documentation below for a complete reference to all of the props and classes available to the components mentioned here.</p>\n<ul>\n<li><a href="/material-ui/api/accordion/"><code>&lt;Accordion /&gt;</code></a></li>\n<li><a href="/material-ui/api/accordion-actions/"><code>&lt;AccordionActions /&gt;</code></a></li>\n<li><a href="/material-ui/api/accordion-details/"><code>&lt;AccordionDetails /&gt;</code></a></li>\n<li><a href="/material-ui/api/accordion-summary/"><code>&lt;AccordionSummary /&gt;</code></a></li>\n</ul>\n'],
                        toc: [{
                            text: "Introduction",
                            level: 2,
                            hash: "introduction",
                            children: []
                        }, {
                            text: "Basics",
                            level: 2,
                            hash: "basics",
                            children: [{
                                text: "Expand icon",
                                level: 3,
                                hash: "expand-icon"
                            }, {
                                text: "Expanded by default",
                                level: 3,
                                hash: "expanded-by-default"
                            }, {
                                text: "Transition",
                                level: 3,
                                hash: "transition"
                            }, {
                                text: "Disabled item",
                                level: 3,
                                hash: "disabled-item"
                            }, {
                                text: "Controlled Accordion",
                                level: 3,
                                hash: "controlled-accordion"
                            }]
                        }, {
                            text: "Customization",
                            level: 2,
                            hash: "customization",
                            children: [{
                                text: "Only one expanded at a time",
                                level: 3,
                                hash: "only-one-expanded-at-a-time"
                            }, {
                                text: "Changing heading level",
                                level: 3,
                                hash: "changing-heading-level"
                            }]
                        }, {
                            text: "Performance",
                            level: 2,
                            hash: "performance",
                            children: []
                        }, {
                            text: "Accessibility",
                            level: 2,
                            hash: "accessibility",
                            children: []
                        }, {
                            text: "Anatomy",
                            level: 2,
                            hash: "anatomy",
                            children: []
                        }, {
                            text: "API",
                            level: 2,
                            hash: "api",
                            children: []
                        }],
                        title: "React Accordion component",
                        headers: {
                            productId: "material-ui",
                            title: "React Accordion component",
                            components: ["Accordion", "AccordionActions", "AccordionDetails", "AccordionSummary"],
                            githubLabel: "component: accordion",
                            materialDesign: "https://m1.material.io/components/expansion-panels.html",
                            waiAria: "https://www.w3.org/WAI/ARIA/apg/patterns/accordion/",
                            githubSource: "packages/mui-material/src/Accordion",
                            hooks: []
                        }
                    }
                },
                nk = {
                    "AccordionUsage.js": {
                        module: "./AccordionUsage.js",
                        raw: 'import * as React from \'react\';\nimport Accordion from \'@mui/material/Accordion\';\nimport AccordionActions from \'@mui/material/AccordionActions\';\nimport AccordionSummary from \'@mui/material/AccordionSummary\';\nimport AccordionDetails from \'@mui/material/AccordionDetails\';\nimport Typography from \'@mui/material/Typography\';\nimport ExpandMoreIcon from \'@mui/icons-material/ExpandMore\';\nimport Button from \'@mui/material/Button\';\n\nexport default function AccordionUsage() {\n  return (\n    <div>\n      <Accordion>\n        <AccordionSummary\n          expandIcon={<ExpandMoreIcon />}\n          aria-controls="panel1-content"\n          id="panel1-header"\n        >\n          <Typography component="span">Accordion 1</Typography>\n        </AccordionSummary>\n        <AccordionDetails>\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse\n          malesuada lacus ex, sit amet blandit leo lobortis eget.\n        </AccordionDetails>\n      </Accordion>\n      <Accordion>\n        <AccordionSummary\n          expandIcon={<ExpandMoreIcon />}\n          aria-controls="panel2-content"\n          id="panel2-header"\n        >\n          <Typography component="span">Accordion 2</Typography>\n        </AccordionSummary>\n        <AccordionDetails>\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse\n          malesuada lacus ex, sit amet blandit leo lobortis eget.\n        </AccordionDetails>\n      </Accordion>\n      <Accordion defaultExpanded>\n        <AccordionSummary\n          expandIcon={<ExpandMoreIcon />}\n          aria-controls="panel3-content"\n          id="panel3-header"\n        >\n          <Typography component="span">Accordion Actions</Typography>\n        </AccordionSummary>\n        <AccordionDetails>\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse\n          malesuada lacus ex, sit amet blandit leo lobortis eget.\n        </AccordionDetails>\n        <AccordionActions>\n          <Button>Cancel</Button>\n          <Button>Agree</Button>\n        </AccordionActions>\n      </Accordion>\n    </div>\n  );\n}\n',
                        moduleTS: "./AccordionUsage.js",
                        rawTS: 'import * as React from \'react\';\nimport Accordion from \'@mui/material/Accordion\';\nimport AccordionActions from \'@mui/material/AccordionActions\';\nimport AccordionSummary from \'@mui/material/AccordionSummary\';\nimport AccordionDetails from \'@mui/material/AccordionDetails\';\nimport Typography from \'@mui/material/Typography\';\nimport ExpandMoreIcon from \'@mui/icons-material/ExpandMore\';\nimport Button from \'@mui/material/Button\';\n\nexport default function AccordionUsage() {\n  return (\n    <div>\n      <Accordion>\n        <AccordionSummary\n          expandIcon={<ExpandMoreIcon />}\n          aria-controls="panel1-content"\n          id="panel1-header"\n        >\n          <Typography component="span">Accordion 1</Typography>\n        </AccordionSummary>\n        <AccordionDetails>\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse\n          malesuada lacus ex, sit amet blandit leo lobortis eget.\n        </AccordionDetails>\n      </Accordion>\n      <Accordion>\n        <AccordionSummary\n          expandIcon={<ExpandMoreIcon />}\n          aria-controls="panel2-content"\n          id="panel2-header"\n        >\n          <Typography component="span">Accordion 2</Typography>\n        </AccordionSummary>\n        <AccordionDetails>\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse\n          malesuada lacus ex, sit amet blandit leo lobortis eget.\n        </AccordionDetails>\n      </Accordion>\n      <Accordion defaultExpanded>\n        <AccordionSummary\n          expandIcon={<ExpandMoreIcon />}\n          aria-controls="panel3-content"\n          id="panel3-header"\n        >\n          <Typography component="span">Accordion Actions</Typography>\n        </AccordionSummary>\n        <AccordionDetails>\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse\n          malesuada lacus ex, sit amet blandit leo lobortis eget.\n        </AccordionDetails>\n        <AccordionActions>\n          <Button>Cancel</Button>\n          <Button>Agree</Button>\n        </AccordionActions>\n      </Accordion>\n    </div>\n  );\n}\n'
                    },
                    "AccordionExpandIcon.js": {
                        module: "./AccordionExpandIcon.js",
                        raw: "import * as React from 'react';\nimport Accordion from '@mui/material/Accordion';\nimport AccordionSummary from '@mui/material/AccordionSummary';\nimport AccordionDetails from '@mui/material/AccordionDetails';\nimport Typography from '@mui/material/Typography';\nimport ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';\nimport ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';\n\nexport default function AccordionExpandIcon() {\n  return (\n    <div>\n      <Accordion>\n        <AccordionSummary\n          expandIcon={<ArrowDownwardIcon />}\n          aria-controls=\"panel1-content\"\n          id=\"panel1-header\"\n        >\n          <Typography component=\"span\">Accordion 1</Typography>\n        </AccordionSummary>\n        <AccordionDetails>\n          <Typography>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse\n            malesuada lacus ex, sit amet blandit leo lobortis eget.\n          </Typography>\n        </AccordionDetails>\n      </Accordion>\n      <Accordion>\n        <AccordionSummary\n          expandIcon={<ArrowDropDownIcon />}\n          aria-controls=\"panel2-content\"\n          id=\"panel2-header\"\n        >\n          <Typography component=\"span\">Accordion 2</Typography>\n        </AccordionSummary>\n        <AccordionDetails>\n          <Typography>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse\n            malesuada lacus ex, sit amet blandit leo lobortis eget.\n          </Typography>\n        </AccordionDetails>\n      </Accordion>\n    </div>\n  );\n}\n",
                        moduleTS: "./AccordionExpandIcon.js",
                        rawTS: "import * as React from 'react';\nimport Accordion from '@mui/material/Accordion';\nimport AccordionSummary from '@mui/material/AccordionSummary';\nimport AccordionDetails from '@mui/material/AccordionDetails';\nimport Typography from '@mui/material/Typography';\nimport ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';\nimport ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';\n\nexport default function AccordionExpandIcon() {\n  return (\n    <div>\n      <Accordion>\n        <AccordionSummary\n          expandIcon={<ArrowDownwardIcon />}\n          aria-controls=\"panel1-content\"\n          id=\"panel1-header\"\n        >\n          <Typography component=\"span\">Accordion 1</Typography>\n        </AccordionSummary>\n        <AccordionDetails>\n          <Typography>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse\n            malesuada lacus ex, sit amet blandit leo lobortis eget.\n          </Typography>\n        </AccordionDetails>\n      </Accordion>\n      <Accordion>\n        <AccordionSummary\n          expandIcon={<ArrowDropDownIcon />}\n          aria-controls=\"panel2-content\"\n          id=\"panel2-header\"\n        >\n          <Typography component=\"span\">Accordion 2</Typography>\n        </AccordionSummary>\n        <AccordionDetails>\n          <Typography>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse\n            malesuada lacus ex, sit amet blandit leo lobortis eget.\n          </Typography>\n        </AccordionDetails>\n      </Accordion>\n    </div>\n  );\n}\n"
                    },
                    "AccordionExpandDefault.js": {
                        module: "./AccordionExpandDefault.js",
                        raw: "import * as React from 'react';\nimport Accordion from '@mui/material/Accordion';\nimport AccordionSummary from '@mui/material/AccordionSummary';\nimport AccordionDetails from '@mui/material/AccordionDetails';\nimport Typography from '@mui/material/Typography';\nimport ExpandMoreIcon from '@mui/icons-material/ExpandMore';\n\nexport default function AccordionExpandDefault() {\n  return (\n    <div>\n      <Accordion defaultExpanded>\n        <AccordionSummary\n          expandIcon={<ExpandMoreIcon />}\n          aria-controls=\"panel1-content\"\n          id=\"panel1-header\"\n        >\n          <Typography component=\"span\">Expanded by default</Typography>\n        </AccordionSummary>\n        <AccordionDetails>\n          <Typography>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse\n            malesuada lacus ex, sit amet blandit leo lobortis eget.\n          </Typography>\n        </AccordionDetails>\n      </Accordion>\n      <Accordion>\n        <AccordionSummary\n          expandIcon={<ExpandMoreIcon />}\n          aria-controls=\"panel2-content\"\n          id=\"panel2-header\"\n        >\n          <Typography component=\"span\">Header</Typography>\n        </AccordionSummary>\n        <AccordionDetails>\n          <Typography>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse\n            malesuada lacus ex, sit amet blandit leo lobortis eget.\n          </Typography>\n        </AccordionDetails>\n      </Accordion>\n    </div>\n  );\n}\n",
                        moduleTS: "./AccordionExpandDefault.js",
                        rawTS: "import * as React from 'react';\nimport Accordion from '@mui/material/Accordion';\nimport AccordionSummary from '@mui/material/AccordionSummary';\nimport AccordionDetails from '@mui/material/AccordionDetails';\nimport Typography from '@mui/material/Typography';\nimport ExpandMoreIcon from '@mui/icons-material/ExpandMore';\n\nexport default function AccordionExpandDefault() {\n  return (\n    <div>\n      <Accordion defaultExpanded>\n        <AccordionSummary\n          expandIcon={<ExpandMoreIcon />}\n          aria-controls=\"panel1-content\"\n          id=\"panel1-header\"\n        >\n          <Typography component=\"span\">Expanded by default</Typography>\n        </AccordionSummary>\n        <AccordionDetails>\n          <Typography>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse\n            malesuada lacus ex, sit amet blandit leo lobortis eget.\n          </Typography>\n        </AccordionDetails>\n      </Accordion>\n      <Accordion>\n        <AccordionSummary\n          expandIcon={<ExpandMoreIcon />}\n          aria-controls=\"panel2-content\"\n          id=\"panel2-header\"\n        >\n          <Typography component=\"span\">Header</Typography>\n        </AccordionSummary>\n        <AccordionDetails>\n          <Typography>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse\n            malesuada lacus ex, sit amet blandit leo lobortis eget.\n          </Typography>\n        </AccordionDetails>\n      </Accordion>\n    </div>\n  );\n}\n"
                    },
                    "AccordionTransition.js": {
                        module: "./AccordionTransition.js",
                        raw: "import * as React from 'react';\nimport Accordion, { accordionClasses } from '@mui/material/Accordion';\nimport AccordionSummary from '@mui/material/AccordionSummary';\nimport AccordionDetails, {\n  accordionDetailsClasses,\n} from '@mui/material/AccordionDetails';\nimport Typography from '@mui/material/Typography';\nimport ExpandMoreIcon from '@mui/icons-material/ExpandMore';\nimport Fade from '@mui/material/Fade';\n\nexport default function AccordionTransition() {\n  const [expanded, setExpanded] = React.useState(false);\n\n  const handleExpansion = () => {\n    setExpanded((prevExpanded) => !prevExpanded);\n  };\n\n  return (\n    <div>\n      <Accordion\n        expanded={expanded}\n        onChange={handleExpansion}\n        slots={{ transition: Fade }}\n        slotProps={{ transition: { timeout: 400 } }}\n        sx={[\n          expanded\n            ? {\n                [`& .${accordionClasses.region}`]: {\n                  height: 'auto',\n                },\n                [`& .${accordionDetailsClasses.root}`]: {\n                  display: 'block',\n                },\n              }\n            : {\n                [`& .${accordionClasses.region}`]: {\n                  height: 0,\n                },\n                [`& .${accordionDetailsClasses.root}`]: {\n                  display: 'none',\n                },\n              },\n        ]}\n      >\n        <AccordionSummary\n          expandIcon={<ExpandMoreIcon />}\n          aria-controls=\"panel1-content\"\n          id=\"panel1-header\"\n        >\n          <Typography component=\"span\">Custom transition using Fade</Typography>\n        </AccordionSummary>\n        <AccordionDetails>\n          <Typography>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse\n            malesuada lacus ex, sit amet blandit leo lobortis eget.\n          </Typography>\n        </AccordionDetails>\n      </Accordion>\n      <Accordion>\n        <AccordionSummary\n          expandIcon={<ExpandMoreIcon />}\n          aria-controls=\"panel2-content\"\n          id=\"panel2-header\"\n        >\n          <Typography component=\"span\">Default transition using Collapse</Typography>\n        </AccordionSummary>\n        <AccordionDetails>\n          <Typography>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse\n            malesuada lacus ex, sit amet blandit leo lobortis eget.\n          </Typography>\n        </AccordionDetails>\n      </Accordion>\n    </div>\n  );\n}\n",
                        moduleTS: "./AccordionTransition.js",
                        rawTS: "import * as React from 'react';\nimport Accordion, {\n  AccordionSlots,\n  accordionClasses,\n} from '@mui/material/Accordion';\nimport AccordionSummary from '@mui/material/AccordionSummary';\nimport AccordionDetails, {\n  accordionDetailsClasses,\n} from '@mui/material/AccordionDetails';\nimport Typography from '@mui/material/Typography';\nimport ExpandMoreIcon from '@mui/icons-material/ExpandMore';\nimport Fade from '@mui/material/Fade';\n\nexport default function AccordionTransition() {\n  const [expanded, setExpanded] = React.useState(false);\n\n  const handleExpansion = () => {\n    setExpanded((prevExpanded) => !prevExpanded);\n  };\n\n  return (\n    <div>\n      <Accordion\n        expanded={expanded}\n        onChange={handleExpansion}\n        slots={{ transition: Fade as AccordionSlots['transition'] }}\n        slotProps={{ transition: { timeout: 400 } }}\n        sx={[\n          expanded\n            ? {\n                [`& .${accordionClasses.region}`]: {\n                  height: 'auto',\n                },\n                [`& .${accordionDetailsClasses.root}`]: {\n                  display: 'block',\n                },\n              }\n            : {\n                [`& .${accordionClasses.region}`]: {\n                  height: 0,\n                },\n                [`& .${accordionDetailsClasses.root}`]: {\n                  display: 'none',\n                },\n              },\n        ]}\n      >\n        <AccordionSummary\n          expandIcon={<ExpandMoreIcon />}\n          aria-controls=\"panel1-content\"\n          id=\"panel1-header\"\n        >\n          <Typography component=\"span\">Custom transition using Fade</Typography>\n        </AccordionSummary>\n        <AccordionDetails>\n          <Typography>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse\n            malesuada lacus ex, sit amet blandit leo lobortis eget.\n          </Typography>\n        </AccordionDetails>\n      </Accordion>\n      <Accordion>\n        <AccordionSummary\n          expandIcon={<ExpandMoreIcon />}\n          aria-controls=\"panel2-content\"\n          id=\"panel2-header\"\n        >\n          <Typography component=\"span\">Default transition using Collapse</Typography>\n        </AccordionSummary>\n        <AccordionDetails>\n          <Typography>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse\n            malesuada lacus ex, sit amet blandit leo lobortis eget.\n          </Typography>\n        </AccordionDetails>\n      </Accordion>\n    </div>\n  );\n}\n"
                    },
                    "DisabledAccordion.js": {
                        module: "./DisabledAccordion.js",
                        raw: 'import * as React from \'react\';\nimport Accordion from \'@mui/material/Accordion\';\nimport AccordionSummary from \'@mui/material/AccordionSummary\';\nimport AccordionDetails from \'@mui/material/AccordionDetails\';\nimport Typography from \'@mui/material/Typography\';\nimport ExpandMoreIcon from \'@mui/icons-material/ExpandMore\';\n\nexport default function DisabledAccordion() {\n  return (\n    <div>\n      <Accordion>\n        <AccordionSummary\n          expandIcon={<ExpandMoreIcon />}\n          aria-controls="panel1-content"\n          id="panel1-header"\n        >\n          <Typography component="span">Accordion 1</Typography>\n        </AccordionSummary>\n        <AccordionDetails>\n          <Typography>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse\n            malesuada lacus ex, sit amet blandit leo lobortis eget.\n          </Typography>\n        </AccordionDetails>\n      </Accordion>\n      <Accordion>\n        <AccordionSummary\n          expandIcon={<ExpandMoreIcon />}\n          aria-controls="panel2-content"\n          id="panel2-header"\n        >\n          <Typography component="span">Accordion 2</Typography>\n        </AccordionSummary>\n        <AccordionDetails>\n          <Typography>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse\n            malesuada lacus ex, sit amet blandit leo lobortis eget.\n          </Typography>\n        </AccordionDetails>\n      </Accordion>\n      <Accordion disabled>\n        <AccordionSummary\n          expandIcon={<ExpandMoreIcon />}\n          aria-controls="panel3-content"\n          id="panel3-header"\n        >\n          <Typography component="span">Disabled Accordion</Typography>\n        </AccordionSummary>\n      </Accordion>\n    </div>\n  );\n}\n',
                        moduleTS: "./DisabledAccordion.js",
                        rawTS: 'import * as React from \'react\';\nimport Accordion from \'@mui/material/Accordion\';\nimport AccordionSummary from \'@mui/material/AccordionSummary\';\nimport AccordionDetails from \'@mui/material/AccordionDetails\';\nimport Typography from \'@mui/material/Typography\';\nimport ExpandMoreIcon from \'@mui/icons-material/ExpandMore\';\n\nexport default function DisabledAccordion() {\n  return (\n    <div>\n      <Accordion>\n        <AccordionSummary\n          expandIcon={<ExpandMoreIcon />}\n          aria-controls="panel1-content"\n          id="panel1-header"\n        >\n          <Typography component="span">Accordion 1</Typography>\n        </AccordionSummary>\n        <AccordionDetails>\n          <Typography>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse\n            malesuada lacus ex, sit amet blandit leo lobortis eget.\n          </Typography>\n        </AccordionDetails>\n      </Accordion>\n      <Accordion>\n        <AccordionSummary\n          expandIcon={<ExpandMoreIcon />}\n          aria-controls="panel2-content"\n          id="panel2-header"\n        >\n          <Typography component="span">Accordion 2</Typography>\n        </AccordionSummary>\n        <AccordionDetails>\n          <Typography>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse\n            malesuada lacus ex, sit amet blandit leo lobortis eget.\n          </Typography>\n        </AccordionDetails>\n      </Accordion>\n      <Accordion disabled>\n        <AccordionSummary\n          expandIcon={<ExpandMoreIcon />}\n          aria-controls="panel3-content"\n          id="panel3-header"\n        >\n          <Typography component="span">Disabled Accordion</Typography>\n        </AccordionSummary>\n      </Accordion>\n    </div>\n  );\n}\n'
                    },
                    "ControlledAccordions.js": {
                        module: "./ControlledAccordions.js",
                        raw: "import * as React from 'react';\nimport Accordion from '@mui/material/Accordion';\nimport AccordionDetails from '@mui/material/AccordionDetails';\nimport AccordionSummary from '@mui/material/AccordionSummary';\nimport Typography from '@mui/material/Typography';\nimport ExpandMoreIcon from '@mui/icons-material/ExpandMore';\n\nexport default function ControlledAccordions() {\n  const [expanded, setExpanded] = React.useState(false);\n\n  const handleChange = (panel) => (event, isExpanded) => {\n    setExpanded(isExpanded ? panel : false);\n  };\n\n  return (\n    <div>\n      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>\n        <AccordionSummary\n          expandIcon={<ExpandMoreIcon />}\n          aria-controls=\"panel1bh-content\"\n          id=\"panel1bh-header\"\n        >\n          <Typography component=\"span\" sx={{ width: '33%', flexShrink: 0 }}>\n            General settings\n          </Typography>\n          <Typography component=\"span\" sx={{ color: 'text.secondary' }}>\n            I am an accordion\n          </Typography>\n        </AccordionSummary>\n        <AccordionDetails>\n          <Typography>\n            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.\n            Aliquam eget maximus est, id dignissim quam.\n          </Typography>\n        </AccordionDetails>\n      </Accordion>\n      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>\n        <AccordionSummary\n          expandIcon={<ExpandMoreIcon />}\n          aria-controls=\"panel2bh-content\"\n          id=\"panel2bh-header\"\n        >\n          <Typography component=\"span\" sx={{ width: '33%', flexShrink: 0 }}>\n            Users\n          </Typography>\n          <Typography component=\"span\" sx={{ color: 'text.secondary' }}>\n            You are currently not an owner\n          </Typography>\n        </AccordionSummary>\n        <AccordionDetails>\n          <Typography>\n            Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,\n            varius pulvinar diam eros in elit. Pellentesque convallis laoreet\n            laoreet.\n          </Typography>\n        </AccordionDetails>\n      </Accordion>\n      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>\n        <AccordionSummary\n          expandIcon={<ExpandMoreIcon />}\n          aria-controls=\"panel3bh-content\"\n          id=\"panel3bh-header\"\n        >\n          <Typography component=\"span\" sx={{ width: '33%', flexShrink: 0 }}>\n            Advanced settings\n          </Typography>\n          <Typography component=\"span\" sx={{ color: 'text.secondary' }}>\n            Filtering has been entirely disabled for whole web server\n          </Typography>\n        </AccordionSummary>\n        <AccordionDetails>\n          <Typography>\n            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit\n            amet egestas eros, vitae egestas augue. Duis vel est augue.\n          </Typography>\n        </AccordionDetails>\n      </Accordion>\n      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>\n        <AccordionSummary\n          expandIcon={<ExpandMoreIcon />}\n          aria-controls=\"panel4bh-content\"\n          id=\"panel4bh-header\"\n        >\n          <Typography component=\"span\" sx={{ width: '33%', flexShrink: 0 }}>\n            Personal data\n          </Typography>\n        </AccordionSummary>\n        <AccordionDetails>\n          <Typography>\n            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit\n            amet egestas eros, vitae egestas augue. Duis vel est augue.\n          </Typography>\n        </AccordionDetails>\n      </Accordion>\n    </div>\n  );\n}\n",
                        moduleTS: "./ControlledAccordions.js",
                        rawTS: "import * as React from 'react';\nimport Accordion from '@mui/material/Accordion';\nimport AccordionDetails from '@mui/material/AccordionDetails';\nimport AccordionSummary from '@mui/material/AccordionSummary';\nimport Typography from '@mui/material/Typography';\nimport ExpandMoreIcon from '@mui/icons-material/ExpandMore';\n\nexport default function ControlledAccordions() {\n  const [expanded, setExpanded] = React.useState<string | false>(false);\n\n  const handleChange =\n    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {\n      setExpanded(isExpanded ? panel : false);\n    };\n\n  return (\n    <div>\n      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>\n        <AccordionSummary\n          expandIcon={<ExpandMoreIcon />}\n          aria-controls=\"panel1bh-content\"\n          id=\"panel1bh-header\"\n        >\n          <Typography component=\"span\" sx={{ width: '33%', flexShrink: 0 }}>\n            General settings\n          </Typography>\n          <Typography component=\"span\" sx={{ color: 'text.secondary' }}>\n            I am an accordion\n          </Typography>\n        </AccordionSummary>\n        <AccordionDetails>\n          <Typography>\n            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.\n            Aliquam eget maximus est, id dignissim quam.\n          </Typography>\n        </AccordionDetails>\n      </Accordion>\n      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>\n        <AccordionSummary\n          expandIcon={<ExpandMoreIcon />}\n          aria-controls=\"panel2bh-content\"\n          id=\"panel2bh-header\"\n        >\n          <Typography component=\"span\" sx={{ width: '33%', flexShrink: 0 }}>\n            Users\n          </Typography>\n          <Typography component=\"span\" sx={{ color: 'text.secondary' }}>\n            You are currently not an owner\n          </Typography>\n        </AccordionSummary>\n        <AccordionDetails>\n          <Typography>\n            Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,\n            varius pulvinar diam eros in elit. Pellentesque convallis laoreet\n            laoreet.\n          </Typography>\n        </AccordionDetails>\n      </Accordion>\n      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>\n        <AccordionSummary\n          expandIcon={<ExpandMoreIcon />}\n          aria-controls=\"panel3bh-content\"\n          id=\"panel3bh-header\"\n        >\n          <Typography component=\"span\" sx={{ width: '33%', flexShrink: 0 }}>\n            Advanced settings\n          </Typography>\n          <Typography component=\"span\" sx={{ color: 'text.secondary' }}>\n            Filtering has been entirely disabled for whole web server\n          </Typography>\n        </AccordionSummary>\n        <AccordionDetails>\n          <Typography>\n            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit\n            amet egestas eros, vitae egestas augue. Duis vel est augue.\n          </Typography>\n        </AccordionDetails>\n      </Accordion>\n      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>\n        <AccordionSummary\n          expandIcon={<ExpandMoreIcon />}\n          aria-controls=\"panel4bh-content\"\n          id=\"panel4bh-header\"\n        >\n          <Typography component=\"span\" sx={{ width: '33%', flexShrink: 0 }}>\n            Personal data\n          </Typography>\n        </AccordionSummary>\n        <AccordionDetails>\n          <Typography>\n            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit\n            amet egestas eros, vitae egestas augue. Duis vel est augue.\n          </Typography>\n        </AccordionDetails>\n      </Accordion>\n    </div>\n  );\n}\n"
                    },
                    "CustomizedAccordions.js": {
                        module: "./CustomizedAccordions.js",
                        raw: "import * as React from 'react';\nimport { styled } from '@mui/material/styles';\nimport ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';\nimport MuiAccordion from '@mui/material/Accordion';\nimport MuiAccordionSummary, {\n  accordionSummaryClasses,\n} from '@mui/material/AccordionSummary';\nimport MuiAccordionDetails from '@mui/material/AccordionDetails';\nimport Typography from '@mui/material/Typography';\n\nconst Accordion = styled((props) => (\n  <MuiAccordion disableGutters elevation={0} square {...props} />\n))(({ theme }) => ({\n  border: `1px solid ${theme.palette.divider}`,\n  '&:not(:last-child)': {\n    borderBottom: 0,\n  },\n  '&::before': {\n    display: 'none',\n  },\n}));\n\nconst AccordionSummary = styled((props) => (\n  <MuiAccordionSummary\n    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}\n    {...props}\n  />\n))(({ theme }) => ({\n  backgroundColor: 'rgba(0, 0, 0, .03)',\n  flexDirection: 'row-reverse',\n  [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:\n    {\n      transform: 'rotate(90deg)',\n    },\n  [`& .${accordionSummaryClasses.content}`]: {\n    marginLeft: theme.spacing(1),\n  },\n  ...theme.applyStyles('dark', {\n    backgroundColor: 'rgba(255, 255, 255, .05)',\n  }),\n}));\n\nconst AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({\n  padding: theme.spacing(2),\n  borderTop: '1px solid rgba(0, 0, 0, .125)',\n}));\n\nexport default function CustomizedAccordions() {\n  const [expanded, setExpanded] = React.useState('panel1');\n\n  const handleChange = (panel) => (event, newExpanded) => {\n    setExpanded(newExpanded ? panel : false);\n  };\n\n  return (\n    <div>\n      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>\n        <AccordionSummary aria-controls=\"panel1d-content\" id=\"panel1d-header\">\n          <Typography component=\"span\">Collapsible Group Item #1</Typography>\n        </AccordionSummary>\n        <AccordionDetails>\n          <Typography>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse\n            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor\n            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,\n            sit amet blandit leo lobortis eget.\n          </Typography>\n        </AccordionDetails>\n      </Accordion>\n      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>\n        <AccordionSummary aria-controls=\"panel2d-content\" id=\"panel2d-header\">\n          <Typography component=\"span\">Collapsible Group Item #2</Typography>\n        </AccordionSummary>\n        <AccordionDetails>\n          <Typography>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse\n            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor\n            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,\n            sit amet blandit leo lobortis eget.\n          </Typography>\n        </AccordionDetails>\n      </Accordion>\n      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>\n        <AccordionSummary aria-controls=\"panel3d-content\" id=\"panel3d-header\">\n          <Typography component=\"span\">Collapsible Group Item #3</Typography>\n        </AccordionSummary>\n        <AccordionDetails>\n          <Typography>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse\n            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor\n            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,\n            sit amet blandit leo lobortis eget.\n          </Typography>\n        </AccordionDetails>\n      </Accordion>\n    </div>\n  );\n}\n",
                        moduleTS: "./CustomizedAccordions.js",
                        rawTS: "import * as React from 'react';\nimport { styled } from '@mui/material/styles';\nimport ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';\nimport MuiAccordion, { AccordionProps } from '@mui/material/Accordion';\nimport MuiAccordionSummary, {\n  AccordionSummaryProps,\n  accordionSummaryClasses,\n} from '@mui/material/AccordionSummary';\nimport MuiAccordionDetails from '@mui/material/AccordionDetails';\nimport Typography from '@mui/material/Typography';\n\nconst Accordion = styled((props: AccordionProps) => (\n  <MuiAccordion disableGutters elevation={0} square {...props} />\n))(({ theme }) => ({\n  border: `1px solid ${theme.palette.divider}`,\n  '&:not(:last-child)': {\n    borderBottom: 0,\n  },\n  '&::before': {\n    display: 'none',\n  },\n}));\n\nconst AccordionSummary = styled((props: AccordionSummaryProps) => (\n  <MuiAccordionSummary\n    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}\n    {...props}\n  />\n))(({ theme }) => ({\n  backgroundColor: 'rgba(0, 0, 0, .03)',\n  flexDirection: 'row-reverse',\n  [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:\n    {\n      transform: 'rotate(90deg)',\n    },\n  [`& .${accordionSummaryClasses.content}`]: {\n    marginLeft: theme.spacing(1),\n  },\n  ...theme.applyStyles('dark', {\n    backgroundColor: 'rgba(255, 255, 255, .05)',\n  }),\n}));\n\nconst AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({\n  padding: theme.spacing(2),\n  borderTop: '1px solid rgba(0, 0, 0, .125)',\n}));\n\nexport default function CustomizedAccordions() {\n  const [expanded, setExpanded] = React.useState<string | false>('panel1');\n\n  const handleChange =\n    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {\n      setExpanded(newExpanded ? panel : false);\n    };\n\n  return (\n    <div>\n      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>\n        <AccordionSummary aria-controls=\"panel1d-content\" id=\"panel1d-header\">\n          <Typography component=\"span\">Collapsible Group Item #1</Typography>\n        </AccordionSummary>\n        <AccordionDetails>\n          <Typography>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse\n            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor\n            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,\n            sit amet blandit leo lobortis eget.\n          </Typography>\n        </AccordionDetails>\n      </Accordion>\n      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>\n        <AccordionSummary aria-controls=\"panel2d-content\" id=\"panel2d-header\">\n          <Typography component=\"span\">Collapsible Group Item #2</Typography>\n        </AccordionSummary>\n        <AccordionDetails>\n          <Typography>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse\n            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor\n            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,\n            sit amet blandit leo lobortis eget.\n          </Typography>\n        </AccordionDetails>\n      </Accordion>\n      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>\n        <AccordionSummary aria-controls=\"panel3d-content\" id=\"panel3d-header\">\n          <Typography component=\"span\">Collapsible Group Item #3</Typography>\n        </AccordionSummary>\n        <AccordionDetails>\n          <Typography>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse\n            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor\n            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,\n            sit amet blandit leo lobortis eget.\n          </Typography>\n        </AccordionDetails>\n      </Accordion>\n    </div>\n  );\n}\n"
                    }
                };
            nk.scope = {
                process: {},
                import: {
                    react: I,
                    "@mui/material/Accordion": L,
                    "@mui/material/AccordionActions": T,
                    "@mui/material/AccordionSummary": O,
                    "@mui/material/AccordionDetails": W,
                    "@mui/material/Typography": K,
                    "@mui/icons-material/ExpandMore": Y,
                    "@mui/material/Button": X,
                    "@mui/icons-material/ArrowDownward": J,
                    "@mui/icons-material/ArrowDropDown": Q,
                    "@mui/material/Fade": nn,
                    "@mui/material/styles": na,
                    "@mui/icons-material/ArrowForwardIosSharp": no
                }
            };
            var nf = {
                    "./AccordionUsage.js": function() {
                        return e || (e = (0, N.jsxs)("div", {
                            children: [(0, N.jsxs)(ne.A, {
                                children: [(0, N.jsx)(ns.A, {
                                    expandIcon: (0, N.jsx)(Y.default, {}),
                                    "aria-controls": "panel1-content",
                                    id: "panel1-header",
                                    children: (0, N.jsx)(ni.A, {
                                        component: "span",
                                        children: "Accordion 1"
                                    })
                                }), (0, N.jsx)(nt.A, {
                                    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
                                })]
                            }), (0, N.jsxs)(ne.A, {
                                children: [(0, N.jsx)(ns.A, {
                                    expandIcon: (0, N.jsx)(Y.default, {}),
                                    "aria-controls": "panel2-content",
                                    id: "panel2-header",
                                    children: (0, N.jsx)(ni.A, {
                                        component: "span",
                                        children: "Accordion 2"
                                    })
                                }), (0, N.jsx)(nt.A, {
                                    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
                                })]
                            }), (0, N.jsxs)(ne.A, {
                                defaultExpanded: !0,
                                children: [(0, N.jsx)(ns.A, {
                                    expandIcon: (0, N.jsx)(Y.default, {}),
                                    "aria-controls": "panel3-content",
                                    id: "panel3-header",
                                    children: (0, N.jsx)(ni.A, {
                                        component: "span",
                                        children: "Accordion Actions"
                                    })
                                }), (0, N.jsx)(nt.A, {
                                    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
                                }), (0, N.jsxs)(V, {
                                    children: [(0, N.jsx)(nc.A, {
                                        children: "Cancel"
                                    }), (0, N.jsx)(nc.A, {
                                        children: "Agree"
                                    })]
                                })]
                            })]
                        }))
                    },
                    "./AccordionExpandIcon.js": function() {
                        return s || (s = (0, N.jsxs)("div", {
                            children: [(0, N.jsxs)(ne.A, {
                                children: [(0, N.jsx)(ns.A, {
                                    expandIcon: (0, N.jsx)(J.default, {}),
                                    "aria-controls": "panel1-content",
                                    id: "panel1-header",
                                    children: (0, N.jsx)(ni.A, {
                                        component: "span",
                                        children: "Accordion 1"
                                    })
                                }), (0, N.jsx)(nt.A, {
                                    children: (0, N.jsx)(ni.A, {
                                        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
                                    })
                                })]
                            }), (0, N.jsxs)(ne.A, {
                                children: [(0, N.jsx)(ns.A, {
                                    expandIcon: (0, N.jsx)(Q.default, {}),
                                    "aria-controls": "panel2-content",
                                    id: "panel2-header",
                                    children: (0, N.jsx)(ni.A, {
                                        component: "span",
                                        children: "Accordion 2"
                                    })
                                }), (0, N.jsx)(nt.A, {
                                    children: (0, N.jsx)(ni.A, {
                                        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
                                    })
                                })]
                            })]
                        }))
                    },
                    "./AccordionExpandDefault.js": function() {
                        return t || (t = (0, N.jsxs)("div", {
                            children: [(0, N.jsxs)(ne.A, {
                                defaultExpanded: !0,
                                children: [(0, N.jsx)(ns.A, {
                                    expandIcon: (0, N.jsx)(Y.default, {}),
                                    "aria-controls": "panel1-content",
                                    id: "panel1-header",
                                    children: (0, N.jsx)(ni.A, {
                                        component: "span",
                                        children: "Expanded by default"
                                    })
                                }), (0, N.jsx)(nt.A, {
                                    children: (0, N.jsx)(ni.A, {
                                        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
                                    })
                                })]
                            }), (0, N.jsxs)(ne.A, {
                                children: [(0, N.jsx)(ns.A, {
                                    expandIcon: (0, N.jsx)(Y.default, {}),
                                    "aria-controls": "panel2-content",
                                    id: "panel2-header",
                                    children: (0, N.jsx)(ni.A, {
                                        component: "span",
                                        children: "Header"
                                    })
                                }), (0, N.jsx)(nt.A, {
                                    children: (0, N.jsx)(ni.A, {
                                        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
                                    })
                                })]
                            })]
                        }))
                    },
                    "./AccordionTransition.js": function() {
                        var n, a, o = j.useState(!1),
                            e = (0, np.A)(o, 2),
                            s = e[0],
                            t = e[1];
                        return (0, N.jsxs)("div", {
                            children: [(0, N.jsxs)(ne.A, {
                                expanded: s,
                                onChange: function() {
                                    t(function(n) {
                                        return !n
                                    })
                                },
                                slots: {
                                    transition: nm.A
                                },
                                slotProps: {
                                    transition: {
                                        timeout: 400
                                    }
                                },
                                sx: [s ? (n = {}, (0, nr.A)(n, "& .".concat(nl.A.region), {
                                    height: "auto"
                                }), (0, nr.A)(n, "& .".concat(nd.A.root), {
                                    display: "block"
                                }), n) : (a = {}, (0, nr.A)(a, "& .".concat(nl.A.region), {
                                    height: 0
                                }), (0, nr.A)(a, "& .".concat(nd.A.root), {
                                    display: "none"
                                }), a)],
                                children: [i || (i = (0, N.jsx)(ns.A, {
                                    expandIcon: (0, N.jsx)(Y.default, {}),
                                    "aria-controls": "panel1-content",
                                    id: "panel1-header",
                                    children: (0, N.jsx)(ni.A, {
                                        component: "span",
                                        children: "Custom transition using Fade"
                                    })
                                })), c || (c = (0, N.jsx)(nt.A, {
                                    children: (0, N.jsx)(ni.A, {
                                        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
                                    })
                                }))]
                            }), r || (r = (0, N.jsxs)(ne.A, {
                                children: [(0, N.jsx)(ns.A, {
                                    expandIcon: (0, N.jsx)(Y.default, {}),
                                    "aria-controls": "panel2-content",
                                    id: "panel2-header",
                                    children: (0, N.jsx)(ni.A, {
                                        component: "span",
                                        children: "Default transition using Collapse"
                                    })
                                }), (0, N.jsx)(nt.A, {
                                    children: (0, N.jsx)(ni.A, {
                                        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
                                    })
                                })]
                            }))]
                        })
                    },
                    "./DisabledAccordion.js": function() {
                        return p || (p = (0, N.jsxs)("div", {
                            children: [(0, N.jsxs)(ne.A, {
                                children: [(0, N.jsx)(ns.A, {
                                    expandIcon: (0, N.jsx)(Y.default, {}),
                                    "aria-controls": "panel1-content",
                                    id: "panel1-header",
                                    children: (0, N.jsx)(ni.A, {
                                        component: "span",
                                        children: "Accordion 1"
                                    })
                                }), (0, N.jsx)(nt.A, {
                                    children: (0, N.jsx)(ni.A, {
                                        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
                                    })
                                })]
                            }), (0, N.jsxs)(ne.A, {
                                children: [(0, N.jsx)(ns.A, {
                                    expandIcon: (0, N.jsx)(Y.default, {}),
                                    "aria-controls": "panel2-content",
                                    id: "panel2-header",
                                    children: (0, N.jsx)(ni.A, {
                                        component: "span",
                                        children: "Accordion 2"
                                    })
                                }), (0, N.jsx)(nt.A, {
                                    children: (0, N.jsx)(ni.A, {
                                        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
                                    })
                                })]
                            }), (0, N.jsx)(ne.A, {
                                disabled: !0,
                                children: (0, N.jsx)(ns.A, {
                                    expandIcon: (0, N.jsx)(Y.default, {}),
                                    "aria-controls": "panel3-content",
                                    id: "panel3-header",
                                    children: (0, N.jsx)(ni.A, {
                                        component: "span",
                                        children: "Disabled Accordion"
                                    })
                                })
                            })]
                        }))
                    },
                    "./ControlledAccordions.js": function() {
                        var n = j.useState(!1),
                            a = (0, np.A)(n, 2),
                            o = a[0],
                            e = a[1],
                            s = function(n) {
                                return function(a, o) {
                                    e(!!o && n)
                                }
                            };
                        return (0, N.jsxs)("div", {
                            children: [(0, N.jsxs)(ne.A, {
                                expanded: "panel1" === o,
                                onChange: s("panel1"),
                                children: [(0, N.jsxs)(ns.A, {
                                    expandIcon: l || (l = (0, N.jsx)(Y.default, {})),
                                    "aria-controls": "panel1bh-content",
                                    id: "panel1bh-header",
                                    children: [(0, N.jsx)(ni.A, {
                                        component: "span",
                                        sx: {
                                            width: "33%",
                                            flexShrink: 0
                                        },
                                        children: "General settings"
                                    }), (0, N.jsx)(ni.A, {
                                        component: "span",
                                        sx: {
                                            color: "text.secondary"
                                        },
                                        children: "I am an accordion"
                                    })]
                                }), d || (d = (0, N.jsx)(nt.A, {
                                    children: (0, N.jsx)(ni.A, {
                                        children: "Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam."
                                    })
                                }))]
                            }), (0, N.jsxs)(ne.A, {
                                expanded: "panel2" === o,
                                onChange: s("panel2"),
                                children: [(0, N.jsxs)(ns.A, {
                                    expandIcon: m || (m = (0, N.jsx)(Y.default, {})),
                                    "aria-controls": "panel2bh-content",
                                    id: "panel2bh-header",
                                    children: [(0, N.jsx)(ni.A, {
                                        component: "span",
                                        sx: {
                                            width: "33%",
                                            flexShrink: 0
                                        },
                                        children: "Users"
                                    }), (0, N.jsx)(ni.A, {
                                        component: "span",
                                        sx: {
                                            color: "text.secondary"
                                        },
                                        children: "You are currently not an owner"
                                    })]
                                }), u || (u = (0, N.jsx)(nt.A, {
                                    children: (0, N.jsx)(ni.A, {
                                        children: "Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet."
                                    })
                                }))]
                            }), (0, N.jsxs)(ne.A, {
                                expanded: "panel3" === o,
                                onChange: s("panel3"),
                                children: [(0, N.jsxs)(ns.A, {
                                    expandIcon: h || (h = (0, N.jsx)(Y.default, {})),
                                    "aria-controls": "panel3bh-content",
                                    id: "panel3bh-header",
                                    children: [(0, N.jsx)(ni.A, {
                                        component: "span",
                                        sx: {
                                            width: "33%",
                                            flexShrink: 0
                                        },
                                        children: "Advanced settings"
                                    }), (0, N.jsx)(ni.A, {
                                        component: "span",
                                        sx: {
                                            color: "text.secondary"
                                        },
                                        children: "Filtering has been entirely disabled for whole web server"
                                    })]
                                }), g || (g = (0, N.jsx)(nt.A, {
                                    children: (0, N.jsx)(ni.A, {
                                        children: "Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue."
                                    })
                                }))]
                            }), (0, N.jsxs)(ne.A, {
                                expanded: "panel4" === o,
                                onChange: s("panel4"),
                                children: [(0, N.jsx)(ns.A, {
                                    expandIcon: A || (A = (0, N.jsx)(Y.default, {})),
                                    "aria-controls": "panel4bh-content",
                                    id: "panel4bh-header",
                                    children: (0, N.jsx)(ni.A, {
                                        component: "span",
                                        sx: {
                                            width: "33%",
                                            flexShrink: 0
                                        },
                                        children: "Personal data"
                                    })
                                }), y || (y = (0, N.jsx)(nt.A, {
                                    children: (0, N.jsx)(ni.A, {
                                        children: "Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue."
                                    })
                                }))]
                            })]
                        })
                    },
                    "./CustomizedAccordions.js": function() {
                        var n = j.useState("panel1"),
                            a = (0, np.A)(n, 2),
                            o = a[0],
                            e = a[1],
                            s = function(n) {
                                return function(a, o) {
                                    e(!!o && n)
                                }
                            };
                        return (0, N.jsxs)("div", {
                            children: [(0, N.jsxs)(nh, {
                                expanded: "panel1" === o,
                                onChange: s("panel1"),
                                children: [x || (x = (0, N.jsx)(ng, {
                                    "aria-controls": "panel1d-content",
                                    id: "panel1d-header",
                                    children: (0, N.jsx)(ni.A, {
                                        component: "span",
                                        children: "Collapsible Group Item #1"
                                    })
                                })), k || (k = (0, N.jsx)(nA, {
                                    children: (0, N.jsx)(ni.A, {
                                        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
                                    })
                                }))]
                            }), (0, N.jsxs)(nh, {
                                expanded: "panel2" === o,
                                onChange: s("panel2"),
                                children: [f || (f = (0, N.jsx)(ng, {
                                    "aria-controls": "panel2d-content",
                                    id: "panel2d-header",
                                    children: (0, N.jsx)(ni.A, {
                                        component: "span",
                                        children: "Collapsible Group Item #2"
                                    })
                                })), b || (b = (0, N.jsx)(nA, {
                                    children: (0, N.jsx)(ni.A, {
                                        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
                                    })
                                }))]
                            }), (0, N.jsxs)(nh, {
                                expanded: "panel3" === o,
                                onChange: s("panel3"),
                                children: [v || (v = (0, N.jsx)(ng, {
                                    "aria-controls": "panel3d-content",
                                    id: "panel3d-header",
                                    children: (0, N.jsx)(ni.A, {
                                        component: "span",
                                        children: "Collapsible Group Item #3"
                                    })
                                })), S || (S = (0, N.jsx)(nA, {
                                    children: (0, N.jsx)(ni.A, {
                                        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
                                    })
                                }))]
                            })]
                        })
                    }
                },
                nb = {
                    "@mui/docs/ComponentLinkHeader": ny.A
                };

            function nv() {
                return (0, N.jsx)(M.A, D()({}, C))
            }
            nv.getLayout = function(n) {
                return (0, N.jsx)(E.Ay, {
                    children: n
                })
            }
        },
        5129: (n, a, o) => {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/material-ui/react-accordion", function() {
                return o(508)
            }])
        },
        40253: (n, a, o) => {
            "use strict";
            o.r(a), o.d(a, {
                default: () => t
            });
            var e = o(59900),
                s = o(21814);
            let t = (0, e.A)((0, s.jsx)("path", {
                d: "M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"
            }), "ArrowForwardIosSharp")
        },
        48566: (n, a, o) => {
            "use strict";
            o.r(a), o.d(a, {
                default: () => e.A
            });
            var e = o(55424)
        },
        57628: (n, a, o) => {
            "use strict";
            o.r(a), o.d(a, {
                buttonClasses: () => s.A,
                default: () => e.A,
                getButtonUtilityClass: () => s.B
            });
            var e = o(4208),
                s = o(25174)
        },
        77272: (n, a, o) => {
            "use strict";
            o.r(a), o.d(a, {
                default: () => t
            });
            var e = o(59900),
                s = o(21814);
            let t = (0, e.A)((0, s.jsx)("path", {
                d: "m7 10 5 5 5-5z"
            }), "ArrowDropDown")
        },
        85235: (n, a, o) => {
            "use strict";
            o.r(a), o.d(a, {
                default: () => t
            });
            var e = o(59900),
                s = o(21814);
            let t = (0, e.A)((0, s.jsx)("path", {
                d: "m20 12-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8z"
            }), "ArrowDownward")
        }
    },
    n => {
        var a = a => n(n.s = a);
        n.O(0, [46593, 32952, 91506, 29803, 67770, 94865, 11041, 3401, 11907, 7548, 4208, 15148, 99831, 22621, 42625, 94672, 78968, 33343, 86331, 15034, 34817, 21098, 10536, 11033, 70743, 90636, 38792], () => a(5129)), _N_E = n.O()
    }
]);