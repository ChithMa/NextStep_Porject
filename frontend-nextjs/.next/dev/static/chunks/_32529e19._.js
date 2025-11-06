(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/Register/Step3.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
function Step3() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(50);
    if ($[0] !== "db4a8088b618268920f2e709a77ba3aeac6d5a0b1963e23e213499fa8dbc87aa") {
        for(let $i = 0; $i < 50; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "db4a8088b618268920f2e709a77ba3aeac6d5a0b1963e23e213499fa8dbc87aa";
    }
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Register$2f$RegisterContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterContext"]);
    if (!context) {
        throw new Error("Step3 must be used within RegisterProvider");
    }
    const { formData, setFormData } = context;
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t0;
    if ($[1] !== formData || $[2] !== setFormData) {
        t0 = ({
            "Step3[handleFileChange]": (e)=>{
                const file = e.target.files?.[0];
                if (!file) {
                    return;
                }
                if (file.type !== "application/pdf") {
                    setError("Only PDF files are allowed for CV");
                    return;
                }
                if (file.size > 5242880) {
                    setError("CV size must not exceed 5 MB");
                    return;
                }
                setError("");
                setFormData({
                    ...formData,
                    cv: file
                });
            }
        })["Step3[handleFileChange]"];
        $[1] = formData;
        $[2] = setFormData;
        $[3] = t0;
    } else {
        t0 = $[3];
    }
    const handleFileChange = t0;
    let t1;
    if ($[4] !== formData.cv || $[5] !== router) {
        t1 = ({
            "Step3[handleNext]": (e_0)=>{
                e_0.preventDefault();
                if (!formData.cv) {
                    setError("Please upload your CV");
                    return;
                }
                setError("");
                router.push("/register/step4");
            }
        })["Step3[handleNext]"];
        $[4] = formData.cv;
        $[5] = router;
        $[6] = t1;
    } else {
        t1 = $[6];
    }
    const handleNext = t1;
    let t2;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "Step3[handleUploadClick]": ()=>{
                fileInputRef.current?.click();
            }
        })["Step3[handleUploadClick]"];
        $[7] = t2;
    } else {
        t2 = $[7];
    }
    const handleUploadClick = t2;
    let t3;
    let t4;
    let t5;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "register-badge",
            children: "NEXT STEP - STUDENT JOURNEY"
        }, void 0, false, {
            fileName: "[project]/components/Register/Step3.tsx",
            lineNumber: 92,
            columnNumber: 10
        }, this);
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "register-main-title",
            children: "Showcase your journey with a polished CV."
        }, void 0, false, {
            fileName: "[project]/components/Register/Step3.tsx",
            lineNumber: 93,
            columnNumber: 10
        }, this);
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "register-subtitle",
            children: "Upload a recent PDF so the coordination team can match you with the right mentors and placement partners."
        }, void 0, false, {
            fileName: "[project]/components/Register/Step3.tsx",
            lineNumber: 94,
            columnNumber: 10
        }, this);
        $[8] = t3;
        $[9] = t4;
        $[10] = t5;
    } else {
        t3 = $[8];
        t4 = $[9];
        t5 = $[10];
    }
    let t6;
    if ($[11] !== router) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "register-header",
            children: [
                t3,
                t4,
                t5,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "register-login-link",
                    children: [
                        "Already started? ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            onClick: {
                                "Step3[<a>.onClick]": ()=>router.push("/")
                            }["Step3[<a>.onClick]"],
                            children: "Return to login"
                        }, void 0, false, {
                            fileName: "[project]/components/Register/Step3.tsx",
                            lineNumber: 105,
                            columnNumber: 107
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Register/Step3.tsx",
                    lineNumber: 105,
                    columnNumber: 55
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Register/Step3.tsx",
            lineNumber: 105,
            columnNumber: 10
        }, this);
        $[11] = router;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    let t7;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "step-label",
            children: "STEP 4 OF 5"
        }, void 0, false, {
            fileName: "[project]/components/Register/Step3.tsx",
            lineNumber: 115,
            columnNumber: 10
        }, this);
        $[13] = t7;
    } else {
        t7 = $[13];
    }
    let t8;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "progress-container",
            children: [
                t7,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "progress-bar-bg",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "progress-bar-fill",
                        style: {
                            width: "80%"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/Register/Step3.tsx",
                        lineNumber: 122,
                        columnNumber: 83
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Register/Step3.tsx",
                    lineNumber: 122,
                    columnNumber: 50
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Register/Step3.tsx",
            lineNumber: 122,
            columnNumber: 10
        }, this);
        $[14] = t8;
    } else {
        t8 = $[14];
    }
    let t9;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
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
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                            }, void 0, false, {
                                fileName: "[project]/components/Register/Step3.tsx",
                                lineNumber: 131,
                                columnNumber: 152
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "12",
                                cy: "7",
                                r: "4"
                            }, void 0, false, {
                                fileName: "[project]/components/Register/Step3.tsx",
                                lineNumber: 131,
                                columnNumber: 206
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Register/Step3.tsx",
                        lineNumber: 131,
                        columnNumber: 77
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Register/Step3.tsx",
                    lineNumber: 131,
                    columnNumber: 50
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "step-nav-label",
                    children: "Personal"
                }, void 0, false, {
                    fileName: "[project]/components/Register/Step3.tsx",
                    lineNumber: 131,
                    columnNumber: 249
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Register/Step3.tsx",
            lineNumber: 131,
            columnNumber: 10
        }, this);
        $[15] = t9;
    } else {
        t9 = $[15];
    }
    let t10;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
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
                                d: "M22 10v6M2 10l10-5 10 5-10 5z"
                            }, void 0, false, {
                                fileName: "[project]/components/Register/Step3.tsx",
                                lineNumber: 138,
                                columnNumber: 153
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M6 12v5c3 3 9 3 12 0v-5"
                            }, void 0, false, {
                                fileName: "[project]/components/Register/Step3.tsx",
                                lineNumber: 138,
                                columnNumber: 195
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Register/Step3.tsx",
                        lineNumber: 138,
                        columnNumber: 78
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Register/Step3.tsx",
                    lineNumber: 138,
                    columnNumber: 51
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "step-nav-label",
                    children: "Education"
                }, void 0, false, {
                    fileName: "[project]/components/Register/Step3.tsx",
                    lineNumber: 138,
                    columnNumber: 243
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Register/Step3.tsx",
            lineNumber: 138,
            columnNumber: 11
        }, this);
        $[16] = t10;
    } else {
        t10 = $[16];
    }
    let t11;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                            fileName: "[project]/components/Register/Step3.tsx",
                            lineNumber: 145,
                            columnNumber: 153
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Register/Step3.tsx",
                        lineNumber: 145,
                        columnNumber: 78
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Register/Step3.tsx",
                    lineNumber: 145,
                    columnNumber: 51
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "step-nav-label",
                    children: "Preferences"
                }, void 0, false, {
                    fileName: "[project]/components/Register/Step3.tsx",
                    lineNumber: 145,
                    columnNumber: 280
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Register/Step3.tsx",
            lineNumber: 145,
            columnNumber: 11
        }, this);
        $[17] = t11;
    } else {
        t11 = $[17];
    }
    let t12;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                            }, void 0, false, {
                                fileName: "[project]/components/Register/Step3.tsx",
                                lineNumber: 152,
                                columnNumber: 151
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                points: "14 2 14 8 20 8"
                            }, void 0, false, {
                                fileName: "[project]/components/Register/Step3.tsx",
                                lineNumber: 152,
                                columnNumber: 222
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Register/Step3.tsx",
                        lineNumber: 152,
                        columnNumber: 76
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Register/Step3.tsx",
                    lineNumber: 152,
                    columnNumber: 49
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "step-nav-label",
                    children: "Documents"
                }, void 0, false, {
                    fileName: "[project]/components/Register/Step3.tsx",
                    lineNumber: 152,
                    columnNumber: 270
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Register/Step3.tsx",
            lineNumber: 152,
            columnNumber: 11
        }, this);
        $[18] = t12;
    } else {
        t12 = $[18];
    }
    let t13;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "step-navigation",
            children: [
                t9,
                t10,
                t11,
                t12,
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
                                        fileName: "[project]/components/Register/Step3.tsx",
                                        lineNumber: 159,
                                        columnNumber: 205
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "12",
                                        cy: "13",
                                        r: "4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Register/Step3.tsx",
                                        lineNumber: 159,
                                        columnNumber: 299
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Register/Step3.tsx",
                                lineNumber: 159,
                                columnNumber: 130
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Register/Step3.tsx",
                            lineNumber: 159,
                            columnNumber: 103
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "step-nav-label",
                            children: "Photo"
                        }, void 0, false, {
                            fileName: "[project]/components/Register/Step3.tsx",
                            lineNumber: 159,
                            columnNumber: 343
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Register/Step3.tsx",
                    lineNumber: 159,
                    columnNumber: 63
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Register/Step3.tsx",
            lineNumber: 159,
            columnNumber: 11
        }, this);
        $[19] = t13;
    } else {
        t13 = $[19];
    }
    let t14;
    let t15;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "form-section-title",
            children: "Credentials"
        }, void 0, false, {
            fileName: "[project]/components/Register/Step3.tsx",
            lineNumber: 167,
            columnNumber: 11
        }, this);
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "form-section-subtitle",
            children: "Upload your latest CV or resume so mentors can review your experience."
        }, void 0, false, {
            fileName: "[project]/components/Register/Step3.tsx",
            lineNumber: 168,
            columnNumber: 11
        }, this);
        $[20] = t14;
        $[21] = t15;
    } else {
        t14 = $[20];
        t15 = $[21];
    }
    const t16 = `file-upload-area ${formData.cv ? "has-file" : ""}`;
    let t17;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "upload-icon",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                }, void 0, false, {
                    fileName: "[project]/components/Register/Step3.tsx",
                    lineNumber: 178,
                    columnNumber: 110
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                    points: "17 8 12 3 7 8"
                }, void 0, false, {
                    fileName: "[project]/components/Register/Step3.tsx",
                    lineNumber: 178,
                    columnNumber: 164
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "12",
                    y1: "3",
                    x2: "12",
                    y2: "15"
                }, void 0, false, {
                    fileName: "[project]/components/Register/Step3.tsx",
                    lineNumber: 178,
                    columnNumber: 199
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Register/Step3.tsx",
            lineNumber: 178,
            columnNumber: 11
        }, this);
        $[22] = t17;
    } else {
        t17 = $[22];
    }
    const t18 = formData.cv ? formData.cv.name : "Drag & drop your CV or click to browse";
    let t19;
    if ($[23] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            children: t18
        }, void 0, false, {
            fileName: "[project]/components/Register/Step3.tsx",
            lineNumber: 186,
            columnNumber: 11
        }, this);
        $[23] = t18;
        $[24] = t19;
    } else {
        t19 = $[24];
    }
    let t20;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "PDF format (Max 5 MB). Ensure your latest experience is included."
        }, void 0, false, {
            fileName: "[project]/components/Register/Step3.tsx",
            lineNumber: 194,
            columnNumber: 11
        }, this);
        $[25] = t20;
    } else {
        t20 = $[25];
    }
    let t21;
    if ($[26] !== handleFileChange) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            ref: fileInputRef,
            type: "file",
            accept: ".pdf",
            onChange: handleFileChange,
            className: "file-upload-input"
        }, void 0, false, {
            fileName: "[project]/components/Register/Step3.tsx",
            lineNumber: 201,
            columnNumber: 11
        }, this);
        $[26] = handleFileChange;
        $[27] = t21;
    } else {
        t21 = $[27];
    }
    let t22;
    if ($[28] !== t16 || $[29] !== t19 || $[30] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t16,
            onClick: handleUploadClick,
            children: [
                t17,
                t19,
                t20,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/components/Register/Step3.tsx",
            lineNumber: 209,
            columnNumber: 11
        }, this);
        $[28] = t16;
        $[29] = t19;
        $[30] = t21;
        $[31] = t22;
    } else {
        t22 = $[31];
    }
    let t23;
    if ($[32] !== formData.cv) {
        t23 = formData.cv && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            style: {
                textAlign: "center",
                fontSize: "14px",
                color: "#4CAF50",
                marginTop: "-8px"
            },
            children: "✓ Ready to upload"
        }, void 0, false, {
            fileName: "[project]/components/Register/Step3.tsx",
            lineNumber: 219,
            columnNumber: 26
        }, this);
        $[32] = formData.cv;
        $[33] = t23;
    } else {
        t23 = $[33];
    }
    let t24;
    if ($[34] !== error) {
        t24 = error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "register-error",
            children: error
        }, void 0, false, {
            fileName: "[project]/components/Register/Step3.tsx",
            lineNumber: 232,
            columnNumber: 20
        }, this);
        $[34] = error;
        $[35] = t24;
    } else {
        t24 = $[35];
    }
    let t25;
    if ($[36] !== router) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            className: "btn-back",
            onClick: {
                "Step3[<button>.onClick]": ()=>router.push("/register/step2")
            }["Step3[<button>.onClick]"],
            children: "Back"
        }, void 0, false, {
            fileName: "[project]/components/Register/Step3.tsx",
            lineNumber: 240,
            columnNumber: 11
        }, this);
        $[36] = router;
        $[37] = t25;
    } else {
        t25 = $[37];
    }
    let t26;
    if ($[38] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "submit",
            className: "btn-next",
            children: "Continue to profile"
        }, void 0, false, {
            fileName: "[project]/components/Register/Step3.tsx",
            lineNumber: 250,
            columnNumber: 11
        }, this);
        $[38] = t26;
    } else {
        t26 = $[38];
    }
    let t27;
    if ($[39] !== t25) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "form-actions",
            children: [
                t25,
                t26
            ]
        }, void 0, true, {
            fileName: "[project]/components/Register/Step3.tsx",
            lineNumber: 257,
            columnNumber: 11
        }, this);
        $[39] = t25;
        $[40] = t27;
    } else {
        t27 = $[40];
    }
    let t28;
    if ($[41] !== handleNext || $[42] !== t22 || $[43] !== t23 || $[44] !== t24 || $[45] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "register-card",
            children: [
                t8,
                t13,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "register-form-content",
                    children: [
                        t14,
                        t15,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleNext,
                            children: [
                                t22,
                                t23,
                                t24,
                                t27
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Register/Step3.tsx",
                            lineNumber: 265,
                            columnNumber: 100
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Register/Step3.tsx",
                    lineNumber: 265,
                    columnNumber: 51
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Register/Step3.tsx",
            lineNumber: 265,
            columnNumber: 11
        }, this);
        $[41] = handleNext;
        $[42] = t22;
        $[43] = t23;
        $[44] = t24;
        $[45] = t27;
        $[46] = t28;
    } else {
        t28 = $[46];
    }
    let t29;
    if ($[47] !== t28 || $[48] !== t6) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "register-wrapper",
            children: [
                t6,
                t28
            ]
        }, void 0, true, {
            fileName: "[project]/components/Register/Step3.tsx",
            lineNumber: 277,
            columnNumber: 11
        }, this);
        $[47] = t28;
        $[48] = t6;
        $[49] = t29;
    } else {
        t29 = $[49];
    }
    return t29;
}
_s(Step3, "nj/p3QcTpBpPmRyNHj596pBY/9U=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Step3;
const __TURBOPACK__default__export__ = Step3;
var _c;
__turbopack_context__.k.register(_c, "Step3");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_32529e19._.js.map