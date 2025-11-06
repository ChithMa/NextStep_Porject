(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/Register/Step1.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Register$2f$RegisterContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Register/RegisterContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function Step1() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(64);
    if ($[0] !== "b20f62939c25ad87691a4ef0c4c20cd702defc19c20a0c4280345cf77db54768") {
        for(let $i = 0; $i < 64; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b20f62939c25ad87691a4ef0c4c20cd702defc19c20a0c4280345cf77db54768";
    }
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Register$2f$RegisterContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterContext"]);
    if (!context) {
        throw new Error("Step1 must be used within RegisterProvider");
    }
    const { formData, setFormData } = context;
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    let t0;
    if ($[1] !== formData.contactNumber || $[2] !== formData.firstName || $[3] !== formData.lastName || $[4] !== formData.studentID || $[5] !== router) {
        t0 = ({
            "Step1[handleNext]": async (e)=>{
                e.preventDefault();
                if (!formData.studentID || !formData.firstName || !formData.lastName || !formData.contactNumber) {
                    setError("All fields are required");
                    return;
                }
                if (!formData.studentID.includes("C") || !formData.studentID.includes("B")) {
                    setError("Student ID must include letters 'C' and 'B'");
                    return;
                }
                const phoneRegex = /^[0-9]{10}$/;
                if (!phoneRegex.test(formData.contactNumber)) {
                    setError("Contact number must be exactly 10 digits.");
                    return;
                }
                setError("");
                router.push("/register/step1-edu");
            }
        })["Step1[handleNext]"];
        $[1] = formData.contactNumber;
        $[2] = formData.firstName;
        $[3] = formData.lastName;
        $[4] = formData.studentID;
        $[5] = router;
        $[6] = t0;
    } else {
        t0 = $[6];
    }
    const handleNext = t0;
    let t1;
    let t2;
    let t3;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "register-badge",
            children: "NEXT STEP - STUDENT JOURNEY"
        }, void 0, false, {
            fileName: "[project]/components/Register/Step1.tsx",
            lineNumber: 62,
            columnNumber: 10
        }, this);
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "register-main-title",
            children: "Start your placement journey with confidence."
        }, void 0, false, {
            fileName: "[project]/components/Register/Step1.tsx",
            lineNumber: 63,
            columnNumber: 10
        }, this);
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "register-subtitle",
            children: "We will guide you through a few quick steps so coordinators can match the best opportunities to your strengths."
        }, void 0, false, {
            fileName: "[project]/components/Register/Step1.tsx",
            lineNumber: 64,
            columnNumber: 10
        }, this);
        $[7] = t1;
        $[8] = t2;
        $[9] = t3;
    } else {
        t1 = $[7];
        t2 = $[8];
        t3 = $[9];
    }
    let t4;
    if ($[10] !== router) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "register-header",
            children: [
                t1,
                t2,
                t3,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "register-login-link",
                    children: [
                        "Already started? ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            onClick: {
                                "Step1[<a>.onClick]": ()=>router.push("/")
                            }["Step1[<a>.onClick]"],
                            children: "Return to login"
                        }, void 0, false, {
                            fileName: "[project]/components/Register/Step1.tsx",
                            lineNumber: 75,
                            columnNumber: 107
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Register/Step1.tsx",
                    lineNumber: 75,
                    columnNumber: 55
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Register/Step1.tsx",
            lineNumber: 75,
            columnNumber: 10
        }, this);
        $[10] = router;
        $[11] = t4;
    } else {
        t4 = $[11];
    }
    let t5;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "step-label",
            children: "STEP 1 OF 4"
        }, void 0, false, {
            fileName: "[project]/components/Register/Step1.tsx",
            lineNumber: 85,
            columnNumber: 10
        }, this);
        $[12] = t5;
    } else {
        t5 = $[12];
    }
    let t6;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "progress-container",
            children: [
                t5,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "progress-bar-bg",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "progress-bar-fill",
                        style: {
                            width: "25%"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/Register/Step1.tsx",
                        lineNumber: 92,
                        columnNumber: 83
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Register/Step1.tsx",
                    lineNumber: 92,
                    columnNumber: 50
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Register/Step1.tsx",
            lineNumber: 92,
            columnNumber: 10
        }, this);
        $[13] = t6;
    } else {
        t6 = $[13];
    }
    let t7;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "step-nav-item active",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "step-icon",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                            }, void 0, false, {
                                fileName: "[project]/components/Register/Step1.tsx",
                                lineNumber: 101,
                                columnNumber: 150
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "12",
                                cy: "7",
                                r: "4"
                            }, void 0, false, {
                                fileName: "[project]/components/Register/Step1.tsx",
                                lineNumber: 101,
                                columnNumber: 204
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Register/Step1.tsx",
                        lineNumber: 101,
                        columnNumber: 75
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Register/Step1.tsx",
                    lineNumber: 101,
                    columnNumber: 48
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "step-nav-label",
                    children: "Personal"
                }, void 0, false, {
                    fileName: "[project]/components/Register/Step1.tsx",
                    lineNumber: 101,
                    columnNumber: 247
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Register/Step1.tsx",
            lineNumber: 101,
            columnNumber: 10
        }, this);
        $[14] = t7;
    } else {
        t7 = $[14];
    }
    let t8;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "step-nav-item inactive",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "step-icon",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M22 10v6M2 10l10-5 10 5-10 5z"
                            }, void 0, false, {
                                fileName: "[project]/components/Register/Step1.tsx",
                                lineNumber: 108,
                                columnNumber: 152
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M6 12v5c3 3 9 3 12 0v-5"
                            }, void 0, false, {
                                fileName: "[project]/components/Register/Step1.tsx",
                                lineNumber: 108,
                                columnNumber: 194
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Register/Step1.tsx",
                        lineNumber: 108,
                        columnNumber: 77
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Register/Step1.tsx",
                    lineNumber: 108,
                    columnNumber: 50
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "step-nav-label",
                    children: "Education"
                }, void 0, false, {
                    fileName: "[project]/components/Register/Step1.tsx",
                    lineNumber: 108,
                    columnNumber: 242
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Register/Step1.tsx",
            lineNumber: 108,
            columnNumber: 10
        }, this);
        $[15] = t8;
    } else {
        t8 = $[15];
    }
    let t9;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "step-nav-item inactive",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "step-icon",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                            points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                        }, void 0, false, {
                            fileName: "[project]/components/Register/Step1.tsx",
                            lineNumber: 115,
                            columnNumber: 152
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Register/Step1.tsx",
                        lineNumber: 115,
                        columnNumber: 77
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Register/Step1.tsx",
                    lineNumber: 115,
                    columnNumber: 50
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "step-nav-label",
                    children: "Preferences"
                }, void 0, false, {
                    fileName: "[project]/components/Register/Step1.tsx",
                    lineNumber: 115,
                    columnNumber: 279
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Register/Step1.tsx",
            lineNumber: 115,
            columnNumber: 10
        }, this);
        $[16] = t9;
    } else {
        t9 = $[16];
    }
    let t10;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "step-nav-item inactive",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "step-icon",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                            }, void 0, false, {
                                fileName: "[project]/components/Register/Step1.tsx",
                                lineNumber: 122,
                                columnNumber: 153
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                points: "14 2 14 8 20 8"
                            }, void 0, false, {
                                fileName: "[project]/components/Register/Step1.tsx",
                                lineNumber: 122,
                                columnNumber: 224
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Register/Step1.tsx",
                        lineNumber: 122,
                        columnNumber: 78
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Register/Step1.tsx",
                    lineNumber: 122,
                    columnNumber: 51
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "step-nav-label",
                    children: "Documents"
                }, void 0, false, {
                    fileName: "[project]/components/Register/Step1.tsx",
                    lineNumber: 122,
                    columnNumber: 272
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Register/Step1.tsx",
            lineNumber: 122,
            columnNumber: 11
        }, this);
        $[17] = t10;
    } else {
        t10 = $[17];
    }
    let t11;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "step-navigation",
            children: [
                t7,
                t8,
                t9,
                t10,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "step-nav-item inactive",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "step-icon",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Register/Step1.tsx",
                                        lineNumber: 129,
                                        columnNumber: 203
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "12",
                                        cy: "13",
                                        r: "4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Register/Step1.tsx",
                                        lineNumber: 129,
                                        columnNumber: 297
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Register/Step1.tsx",
                                lineNumber: 129,
                                columnNumber: 128
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Register/Step1.tsx",
                            lineNumber: 129,
                            columnNumber: 101
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "step-nav-label",
                            children: "Photo"
                        }, void 0, false, {
                            fileName: "[project]/components/Register/Step1.tsx",
                            lineNumber: 129,
                            columnNumber: 341
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Register/Step1.tsx",
                    lineNumber: 129,
                    columnNumber: 61
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Register/Step1.tsx",
            lineNumber: 129,
            columnNumber: 11
        }, this);
        $[18] = t11;
    } else {
        t11 = $[18];
    }
    let t12;
    let t13;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "form-section-title",
            children: "Personal Information"
        }, void 0, false, {
            fileName: "[project]/components/Register/Step1.tsx",
            lineNumber: 137,
            columnNumber: 11
        }, this);
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "form-section-subtitle",
            children: "Let's start with your basic details and contact information."
        }, void 0, false, {
            fileName: "[project]/components/Register/Step1.tsx",
            lineNumber: 138,
            columnNumber: 11
        }, this);
        $[19] = t12;
        $[20] = t13;
    } else {
        t12 = $[19];
        t13 = $[20];
    }
    let t14;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            htmlFor: "studentID",
            children: "Student ID"
        }, void 0, false, {
            fileName: "[project]/components/Register/Step1.tsx",
            lineNumber: 147,
            columnNumber: 11
        }, this);
        $[21] = t14;
    } else {
        t14 = $[21];
    }
    const t15 = formData.studentID || "";
    let t16;
    if ($[22] !== formData || $[23] !== setFormData) {
        t16 = ({
            "Step1[<input>.onChange]": (e_0)=>setFormData({
                    ...formData,
                    studentID: e_0.target.value
                })
        })["Step1[<input>.onChange]"];
        $[22] = formData;
        $[23] = setFormData;
        $[24] = t16;
    } else {
        t16 = $[24];
    }
    let t17;
    if ($[25] !== t15 || $[26] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "form-field full-width",
            children: [
                t14,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    id: "studentID",
                    type: "text",
                    placeholder: "CB012345",
                    value: t15,
                    onChange: t16
                }, void 0, false, {
                    fileName: "[project]/components/Register/Step1.tsx",
                    lineNumber: 169,
                    columnNumber: 55
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Register/Step1.tsx",
            lineNumber: 169,
            columnNumber: 11
        }, this);
        $[25] = t15;
        $[26] = t16;
        $[27] = t17;
    } else {
        t17 = $[27];
    }
    let t18;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            htmlFor: "firstName",
            children: "First Name"
        }, void 0, false, {
            fileName: "[project]/components/Register/Step1.tsx",
            lineNumber: 178,
            columnNumber: 11
        }, this);
        $[28] = t18;
    } else {
        t18 = $[28];
    }
    const t19 = formData.firstName || "";
    let t20;
    if ($[29] !== formData || $[30] !== setFormData) {
        t20 = ({
            "Step1[<input>.onChange]": (e_1)=>setFormData({
                    ...formData,
                    firstName: e_1.target.value
                })
        })["Step1[<input>.onChange]"];
        $[29] = formData;
        $[30] = setFormData;
        $[31] = t20;
    } else {
        t20 = $[31];
    }
    let t21;
    if ($[32] !== t19 || $[33] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "form-field",
            children: [
                t18,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    id: "firstName",
                    type: "text",
                    placeholder: "John",
                    value: t19,
                    onChange: t20
                }, void 0, false, {
                    fileName: "[project]/components/Register/Step1.tsx",
                    lineNumber: 200,
                    columnNumber: 44
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Register/Step1.tsx",
            lineNumber: 200,
            columnNumber: 11
        }, this);
        $[32] = t19;
        $[33] = t20;
        $[34] = t21;
    } else {
        t21 = $[34];
    }
    let t22;
    if ($[35] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            htmlFor: "lastName",
            children: "Last Name"
        }, void 0, false, {
            fileName: "[project]/components/Register/Step1.tsx",
            lineNumber: 209,
            columnNumber: 11
        }, this);
        $[35] = t22;
    } else {
        t22 = $[35];
    }
    const t23 = formData.lastName || "";
    let t24;
    if ($[36] !== formData || $[37] !== setFormData) {
        t24 = ({
            "Step1[<input>.onChange]": (e_2)=>setFormData({
                    ...formData,
                    lastName: e_2.target.value
                })
        })["Step1[<input>.onChange]"];
        $[36] = formData;
        $[37] = setFormData;
        $[38] = t24;
    } else {
        t24 = $[38];
    }
    let t25;
    if ($[39] !== t23 || $[40] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "form-field",
            children: [
                t22,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    id: "lastName",
                    type: "text",
                    placeholder: "Doe",
                    value: t23,
                    onChange: t24
                }, void 0, false, {
                    fileName: "[project]/components/Register/Step1.tsx",
                    lineNumber: 231,
                    columnNumber: 44
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Register/Step1.tsx",
            lineNumber: 231,
            columnNumber: 11
        }, this);
        $[39] = t23;
        $[40] = t24;
        $[41] = t25;
    } else {
        t25 = $[41];
    }
    let t26;
    if ($[42] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            htmlFor: "contactNumber",
            children: "Contact Number"
        }, void 0, false, {
            fileName: "[project]/components/Register/Step1.tsx",
            lineNumber: 240,
            columnNumber: 11
        }, this);
        $[42] = t26;
    } else {
        t26 = $[42];
    }
    const t27 = formData.contactNumber || "";
    let t28;
    if ($[43] !== formData || $[44] !== setFormData) {
        t28 = ({
            "Step1[<input>.onChange]": (e_3)=>setFormData({
                    ...formData,
                    contactNumber: e_3.target.value
                })
        })["Step1[<input>.onChange]"];
        $[43] = formData;
        $[44] = setFormData;
        $[45] = t28;
    } else {
        t28 = $[45];
    }
    let t29;
    if ($[46] !== t27 || $[47] !== t28) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "form-field full-width",
            children: [
                t26,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    id: "contactNumber",
                    type: "tel",
                    placeholder: "0771234567",
                    value: t27,
                    onChange: t28
                }, void 0, false, {
                    fileName: "[project]/components/Register/Step1.tsx",
                    lineNumber: 262,
                    columnNumber: 55
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Register/Step1.tsx",
            lineNumber: 262,
            columnNumber: 11
        }, this);
        $[46] = t27;
        $[47] = t28;
        $[48] = t29;
    } else {
        t29 = $[48];
    }
    let t30;
    if ($[49] !== t17 || $[50] !== t21 || $[51] !== t25 || $[52] !== t29) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "form-grid",
            children: [
                t17,
                t21,
                t25,
                t29
            ]
        }, void 0, true, {
            fileName: "[project]/components/Register/Step1.tsx",
            lineNumber: 271,
            columnNumber: 11
        }, this);
        $[49] = t17;
        $[50] = t21;
        $[51] = t25;
        $[52] = t29;
        $[53] = t30;
    } else {
        t30 = $[53];
    }
    let t31;
    if ($[54] !== error) {
        t31 = error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "register-error",
            children: error
        }, void 0, false, {
            fileName: "[project]/components/Register/Step1.tsx",
            lineNumber: 282,
            columnNumber: 20
        }, this);
        $[54] = error;
        $[55] = t31;
    } else {
        t31 = $[55];
    }
    let t32;
    if ($[56] === Symbol.for("react.memo_cache_sentinel")) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "form-actions",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "submit",
                className: "btn-next",
                children: "Continue to education"
            }, void 0, false, {
                fileName: "[project]/components/Register/Step1.tsx",
                lineNumber: 290,
                columnNumber: 41
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Register/Step1.tsx",
            lineNumber: 290,
            columnNumber: 11
        }, this);
        $[56] = t32;
    } else {
        t32 = $[56];
    }
    let t33;
    if ($[57] !== handleNext || $[58] !== t30 || $[59] !== t31) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "register-card",
            children: [
                t6,
                t11,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "register-form-content",
                    children: [
                        t12,
                        t13,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleNext,
                            children: [
                                t30,
                                t31,
                                t32
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Register/Step1.tsx",
                            lineNumber: 297,
                            columnNumber: 100
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Register/Step1.tsx",
                    lineNumber: 297,
                    columnNumber: 51
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Register/Step1.tsx",
            lineNumber: 297,
            columnNumber: 11
        }, this);
        $[57] = handleNext;
        $[58] = t30;
        $[59] = t31;
        $[60] = t33;
    } else {
        t33 = $[60];
    }
    let t34;
    if ($[61] !== t33 || $[62] !== t4) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "register-wrapper",
            children: [
                t4,
                t33
            ]
        }, void 0, true, {
            fileName: "[project]/components/Register/Step1.tsx",
            lineNumber: 307,
            columnNumber: 11
        }, this);
        $[61] = t33;
        $[62] = t4;
        $[63] = t34;
    } else {
        t34 = $[63];
    }
    return t34;
}
_s(Step1, "YL/zxGOIjpqY0gBS2ZY+jCeAjiI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Step1;
const __TURBOPACK__default__export__ = Step1;
var _c;
__turbopack_context__.k.register(_c, "Step1");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_0dedaf2e._.js.map