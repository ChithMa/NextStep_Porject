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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function Step1() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(122);
    if ($[0] !== "72506b8b7ab0249e764a3f8303517594b39c40618840f581c1a422e761017816") {
        for(let $i = 0; $i < 122; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "72506b8b7ab0249e764a3f8303517594b39c40618840f581c1a422e761017816";
    }
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Register$2f$RegisterContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterContext"]);
    if (!context) {
        throw new Error("Step1 must be used within RegisterProvider");
    }
    const { formData, setFormData } = context;
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    let t0;
    if ($[1] !== formData.availability || $[2] !== formData.contactNumber || $[3] !== formData.degreeProgramme || $[4] !== formData.email || $[5] !== formData.firstName || $[6] !== formData.lastName || $[7] !== formData.level || $[8] !== formData.password || $[9] !== formData.studentID || $[10] !== router) {
        t0 = ({
            "Step1[handleNext]": async (e)=>{
                e.preventDefault();
                if (!formData.studentID || !formData.firstName || !formData.lastName || !formData.contactNumber || !formData.degreeProgramme || !formData.level || !formData.email || !formData.password || !formData.availability) {
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
                const emailRegex = new RegExp(`${formData.studentID}@students\\.apiit\\.lk$`);
                if (!emailRegex.test(formData.email)) {
                    setError("Email must match format: StudentID@students.apiit.lk");
                    return;
                }
                ;
                try {
                    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("http://localhost:5000/api/auth/check-duplicates", {
                        studentID: formData.studentID,
                        email: formData.email
                    });
                    if (res.data.exists) {
                        setError(res.data.message);
                        return;
                    }
                } catch (t1) {
                    const err = t1;
                    console.error(err);
                    setError("Error checking existing accounts");
                    return;
                }
                setError("");
                router.push("/register/step2");
            }
        })["Step1[handleNext]"];
        $[1] = formData.availability;
        $[2] = formData.contactNumber;
        $[3] = formData.degreeProgramme;
        $[4] = formData.email;
        $[5] = formData.firstName;
        $[6] = formData.lastName;
        $[7] = formData.level;
        $[8] = formData.password;
        $[9] = formData.studentID;
        $[10] = router;
        $[11] = t0;
    } else {
        t0 = $[11];
    }
    const handleNext = t0;
    let t1;
    let t2;
    let t3;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "register-badge",
            children: "NEXT STEP - STUDENT JOURNEY"
        }, void 0, false, {
            fileName: "[project]/components/Register/Step1.tsx",
            lineNumber: 88,
            columnNumber: 10
        }, this);
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "register-main-title",
            children: "Start your placement journey with confidence."
        }, void 0, false, {
            fileName: "[project]/components/Register/Step1.tsx",
            lineNumber: 89,
            columnNumber: 10
        }, this);
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "register-subtitle",
            children: "We will guide you through a few quick steps so coordinators can match the best opportunities to your strengths."
        }, void 0, false, {
            fileName: "[project]/components/Register/Step1.tsx",
            lineNumber: 90,
            columnNumber: 10
        }, this);
        $[12] = t1;
        $[13] = t2;
        $[14] = t3;
    } else {
        t1 = $[12];
        t2 = $[13];
        t3 = $[14];
    }
    let t4;
    if ($[15] !== router) {
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
                            lineNumber: 101,
                            columnNumber: 107
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Register/Step1.tsx",
                    lineNumber: 101,
                    columnNumber: 55
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Register/Step1.tsx",
            lineNumber: 101,
            columnNumber: 10
        }, this);
        $[15] = router;
        $[16] = t4;
    } else {
        t4 = $[16];
    }
    let t5;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "step-label",
            children: "STEP 1 OF 4"
        }, void 0, false, {
            fileName: "[project]/components/Register/Step1.tsx",
            lineNumber: 111,
            columnNumber: 10
        }, this);
        $[17] = t5;
    } else {
        t5 = $[17];
    }
    let t6;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
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
                        lineNumber: 118,
                        columnNumber: 83
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Register/Step1.tsx",
                    lineNumber: 118,
                    columnNumber: 50
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Register/Step1.tsx",
            lineNumber: 118,
            columnNumber: 10
        }, this);
        $[18] = t6;
    } else {
        t6 = $[18];
    }
    let t7;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
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
                                lineNumber: 127,
                                columnNumber: 150
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "12",
                                cy: "7",
                                r: "4"
                            }, void 0, false, {
                                fileName: "[project]/components/Register/Step1.tsx",
                                lineNumber: 127,
                                columnNumber: 204
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Register/Step1.tsx",
                        lineNumber: 127,
                        columnNumber: 75
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Register/Step1.tsx",
                    lineNumber: 127,
                    columnNumber: 48
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "step-nav-label",
                    children: "Basic Info"
                }, void 0, false, {
                    fileName: "[project]/components/Register/Step1.tsx",
                    lineNumber: 127,
                    columnNumber: 247
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Register/Step1.tsx",
            lineNumber: 127,
            columnNumber: 10
        }, this);
        $[19] = t7;
    } else {
        t7 = $[19];
    }
    let t8;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
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
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                            points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                        }, void 0, false, {
                            fileName: "[project]/components/Register/Step1.tsx",
                            lineNumber: 134,
                            columnNumber: 152
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Register/Step1.tsx",
                        lineNumber: 134,
                        columnNumber: 77
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Register/Step1.tsx",
                    lineNumber: 134,
                    columnNumber: 50
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "step-nav-label",
                    children: "Preferences"
                }, void 0, false, {
                    fileName: "[project]/components/Register/Step1.tsx",
                    lineNumber: 134,
                    columnNumber: 279
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Register/Step1.tsx",
            lineNumber: 134,
            columnNumber: 10
        }, this);
        $[20] = t8;
    } else {
        t8 = $[20];
    }
    let t9;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
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
                                d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                            }, void 0, false, {
                                fileName: "[project]/components/Register/Step1.tsx",
                                lineNumber: 141,
                                columnNumber: 152
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                points: "14 2 14 8 20 8"
                            }, void 0, false, {
                                fileName: "[project]/components/Register/Step1.tsx",
                                lineNumber: 141,
                                columnNumber: 223
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Register/Step1.tsx",
                        lineNumber: 141,
                        columnNumber: 77
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Register/Step1.tsx",
                    lineNumber: 141,
                    columnNumber: 50
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "step-nav-label",
                    children: "Credentials"
                }, void 0, false, {
                    fileName: "[project]/components/Register/Step1.tsx",
                    lineNumber: 141,
                    columnNumber: 271
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Register/Step1.tsx",
            lineNumber: 141,
            columnNumber: 10
        }, this);
        $[21] = t9;
    } else {
        t9 = $[21];
    }
    let t10;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "step-navigation",
            children: [
                t7,
                t8,
                t9,
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
                                        d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Register/Step1.tsx",
                                        lineNumber: 148,
                                        columnNumber: 198
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "12",
                                        cy: "7",
                                        r: "4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Register/Step1.tsx",
                                        lineNumber: 148,
                                        columnNumber: 252
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Register/Step1.tsx",
                                lineNumber: 148,
                                columnNumber: 123
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Register/Step1.tsx",
                            lineNumber: 148,
                            columnNumber: 96
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "step-nav-label",
                            children: "Profile"
                        }, void 0, false, {
                            fileName: "[project]/components/Register/Step1.tsx",
                            lineNumber: 148,
                            columnNumber: 295
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Register/Step1.tsx",
                    lineNumber: 148,
                    columnNumber: 56
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Register/Step1.tsx",
            lineNumber: 148,
            columnNumber: 11
        }, this);
        $[22] = t10;
    } else {
        t10 = $[22];
    }
    let t11;
    let t12;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "form-section-title",
            children: "Basic Info"
        }, void 0, false, {
            fileName: "[project]/components/Register/Step1.tsx",
            lineNumber: 156,
            columnNumber: 11
        }, this);
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "form-section-subtitle",
            children: "Introduce yourself and share your academic details."
        }, void 0, false, {
            fileName: "[project]/components/Register/Step1.tsx",
            lineNumber: 157,
            columnNumber: 11
        }, this);
        $[23] = t11;
        $[24] = t12;
    } else {
        t11 = $[23];
        t12 = $[24];
    }
    let t13;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            htmlFor: "studentID",
            children: "Student ID"
        }, void 0, false, {
            fileName: "[project]/components/Register/Step1.tsx",
            lineNumber: 166,
            columnNumber: 11
        }, this);
        $[25] = t13;
    } else {
        t13 = $[25];
    }
    const t14 = formData.studentID || "";
    let t15;
    if ($[26] !== formData || $[27] !== setFormData) {
        t15 = ({
            "Step1[<input>.onChange]": (e_0)=>setFormData({
                    ...formData,
                    studentID: e_0.target.value
                })
        })["Step1[<input>.onChange]"];
        $[26] = formData;
        $[27] = setFormData;
        $[28] = t15;
    } else {
        t15 = $[28];
    }
    let t16;
    if ($[29] !== t14 || $[30] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "form-field full-width",
            children: [
                t13,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    id: "studentID",
                    type: "text",
                    placeholder: "nanu@example.com",
                    value: t14,
                    onChange: t15
                }, void 0, false, {
                    fileName: "[project]/components/Register/Step1.tsx",
                    lineNumber: 188,
                    columnNumber: 55
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Register/Step1.tsx",
            lineNumber: 188,
            columnNumber: 11
        }, this);
        $[29] = t14;
        $[30] = t15;
        $[31] = t16;
    } else {
        t16 = $[31];
    }
    let t17;
    if ($[32] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            htmlFor: "degreeProgramme",
            children: "Degree Programme"
        }, void 0, false, {
            fileName: "[project]/components/Register/Step1.tsx",
            lineNumber: 197,
            columnNumber: 11
        }, this);
        $[32] = t17;
    } else {
        t17 = $[32];
    }
    const t18 = formData.degreeProgramme || "";
    let t19;
    if ($[33] !== formData || $[34] !== setFormData) {
        t19 = ({
            "Step1[<select>.onChange]": (e_1)=>setFormData({
                    ...formData,
                    degreeProgramme: e_1.target.value
                })
        })["Step1[<select>.onChange]"];
        $[33] = formData;
        $[34] = setFormData;
        $[35] = t19;
    } else {
        t19 = $[35];
    }
    let t20;
    let t21;
    let t22;
    let t23;
    if ($[36] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "",
            children: "Software Engineering"
        }, void 0, false, {
            fileName: "[project]/components/Register/Step1.tsx",
            lineNumber: 222,
            columnNumber: 11
        }, this);
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "Software Engineering",
            children: "Software Engineering"
        }, void 0, false, {
            fileName: "[project]/components/Register/Step1.tsx",
            lineNumber: 223,
            columnNumber: 11
        }, this);
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "Computer Science",
            children: "Computer Science"
        }, void 0, false, {
            fileName: "[project]/components/Register/Step1.tsx",
            lineNumber: 224,
            columnNumber: 11
        }, this);
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "Cyber Security",
            children: "Cyber Security"
        }, void 0, false, {
            fileName: "[project]/components/Register/Step1.tsx",
            lineNumber: 225,
            columnNumber: 11
        }, this);
        $[36] = t20;
        $[37] = t21;
        $[38] = t22;
        $[39] = t23;
    } else {
        t20 = $[36];
        t21 = $[37];
        t22 = $[38];
        t23 = $[39];
    }
    let t24;
    if ($[40] !== t18 || $[41] !== t19) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "form-field full-width",
            children: [
                t17,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                    id: "degreeProgramme",
                    value: t18,
                    onChange: t19,
                    children: [
                        t20,
                        t21,
                        t22,
                        t23
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Register/Step1.tsx",
                    lineNumber: 238,
                    columnNumber: 55
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Register/Step1.tsx",
            lineNumber: 238,
            columnNumber: 11
        }, this);
        $[40] = t18;
        $[41] = t19;
        $[42] = t24;
    } else {
        t24 = $[42];
    }
    let t25;
    if ($[43] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            htmlFor: "firstName",
            children: "First Name"
        }, void 0, false, {
            fileName: "[project]/components/Register/Step1.tsx",
            lineNumber: 247,
            columnNumber: 11
        }, this);
        $[43] = t25;
    } else {
        t25 = $[43];
    }
    const t26 = formData.firstName || "";
    let t27;
    if ($[44] !== formData || $[45] !== setFormData) {
        t27 = ({
            "Step1[<input>.onChange]": (e_2)=>setFormData({
                    ...formData,
                    firstName: e_2.target.value
                })
        })["Step1[<input>.onChange]"];
        $[44] = formData;
        $[45] = setFormData;
        $[46] = t27;
    } else {
        t27 = $[46];
    }
    let t28;
    if ($[47] !== t26 || $[48] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "form-field",
            children: [
                t25,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    id: "firstName",
                    type: "text",
                    placeholder: "nanu",
                    value: t26,
                    onChange: t27
                }, void 0, false, {
                    fileName: "[project]/components/Register/Step1.tsx",
                    lineNumber: 269,
                    columnNumber: 44
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Register/Step1.tsx",
            lineNumber: 269,
            columnNumber: 11
        }, this);
        $[47] = t26;
        $[48] = t27;
        $[49] = t28;
    } else {
        t28 = $[49];
    }
    let t29;
    if ($[50] === Symbol.for("react.memo_cache_sentinel")) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            htmlFor: "lastName",
            children: "Last Name"
        }, void 0, false, {
            fileName: "[project]/components/Register/Step1.tsx",
            lineNumber: 278,
            columnNumber: 11
        }, this);
        $[50] = t29;
    } else {
        t29 = $[50];
    }
    const t30 = formData.lastName || "";
    let t31;
    if ($[51] !== formData || $[52] !== setFormData) {
        t31 = ({
            "Step1[<input>.onChange]": (e_3)=>setFormData({
                    ...formData,
                    lastName: e_3.target.value
                })
        })["Step1[<input>.onChange]"];
        $[51] = formData;
        $[52] = setFormData;
        $[53] = t31;
    } else {
        t31 = $[53];
    }
    let t32;
    if ($[54] !== t30 || $[55] !== t31) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "form-field",
            children: [
                t29,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    id: "lastName",
                    type: "text",
                    placeholder: "nntn",
                    value: t30,
                    onChange: t31
                }, void 0, false, {
                    fileName: "[project]/components/Register/Step1.tsx",
                    lineNumber: 300,
                    columnNumber: 44
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Register/Step1.tsx",
            lineNumber: 300,
            columnNumber: 11
        }, this);
        $[54] = t30;
        $[55] = t31;
        $[56] = t32;
    } else {
        t32 = $[56];
    }
    let t33;
    if ($[57] === Symbol.for("react.memo_cache_sentinel")) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            htmlFor: "level",
            children: "General level"
        }, void 0, false, {
            fileName: "[project]/components/Register/Step1.tsx",
            lineNumber: 309,
            columnNumber: 11
        }, this);
        $[57] = t33;
    } else {
        t33 = $[57];
    }
    const t34 = formData.level || "";
    let t35;
    if ($[58] !== formData || $[59] !== setFormData) {
        t35 = ({
            "Step1[<select>.onChange]": (e_4)=>setFormData({
                    ...formData,
                    level: e_4.target.value
                })
        })["Step1[<select>.onChange]"];
        $[58] = formData;
        $[59] = setFormData;
        $[60] = t35;
    } else {
        t35 = $[60];
    }
    let t36;
    let t37;
    let t38;
    if ($[61] === Symbol.for("react.memo_cache_sentinel")) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "",
            children: "Level 5"
        }, void 0, false, {
            fileName: "[project]/components/Register/Step1.tsx",
            lineNumber: 333,
            columnNumber: 11
        }, this);
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "Level 5",
            children: "Level 5"
        }, void 0, false, {
            fileName: "[project]/components/Register/Step1.tsx",
            lineNumber: 334,
            columnNumber: 11
        }, this);
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "Level 6",
            children: "Level 6"
        }, void 0, false, {
            fileName: "[project]/components/Register/Step1.tsx",
            lineNumber: 335,
            columnNumber: 11
        }, this);
        $[61] = t36;
        $[62] = t37;
        $[63] = t38;
    } else {
        t36 = $[61];
        t37 = $[62];
        t38 = $[63];
    }
    let t39;
    if ($[64] !== t34 || $[65] !== t35) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "form-field full-width",
            children: [
                t33,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                    id: "level",
                    value: t34,
                    onChange: t35,
                    children: [
                        t36,
                        t37,
                        t38
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Register/Step1.tsx",
                    lineNumber: 346,
                    columnNumber: 55
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Register/Step1.tsx",
            lineNumber: 346,
            columnNumber: 11
        }, this);
        $[64] = t34;
        $[65] = t35;
        $[66] = t39;
    } else {
        t39 = $[66];
    }
    let t40;
    if ($[67] === Symbol.for("react.memo_cache_sentinel")) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            children: "Availability"
        }, void 0, false, {
            fileName: "[project]/components/Register/Step1.tsx",
            lineNumber: 355,
            columnNumber: 11
        }, this);
        $[67] = t40;
    } else {
        t40 = $[67];
    }
    const t41 = formData.availability === "Full-time";
    let t42;
    if ($[68] !== formData || $[69] !== setFormData) {
        t42 = ({
            "Step1[<input>.onChange]": (e_5)=>setFormData({
                    ...formData,
                    availability: e_5.target.value
                })
        })["Step1[<input>.onChange]"];
        $[68] = formData;
        $[69] = setFormData;
        $[70] = t42;
    } else {
        t42 = $[70];
    }
    let t43;
    if ($[71] !== t41 || $[72] !== t42) {
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "radio",
            id: "fulltime",
            name: "availability",
            value: "Full-time",
            checked: t41,
            onChange: t42
        }, void 0, false, {
            fileName: "[project]/components/Register/Step1.tsx",
            lineNumber: 377,
            columnNumber: 11
        }, this);
        $[71] = t41;
        $[72] = t42;
        $[73] = t43;
    } else {
        t43 = $[73];
    }
    let t44;
    if ($[74] === Symbol.for("react.memo_cache_sentinel")) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            htmlFor: "fulltime",
            children: "Full-time"
        }, void 0, false, {
            fileName: "[project]/components/Register/Step1.tsx",
            lineNumber: 386,
            columnNumber: 11
        }, this);
        $[74] = t44;
    } else {
        t44 = $[74];
    }
    let t45;
    if ($[75] !== t43) {
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "radio-option",
            children: [
                t43,
                t44
            ]
        }, void 0, true, {
            fileName: "[project]/components/Register/Step1.tsx",
            lineNumber: 393,
            columnNumber: 11
        }, this);
        $[75] = t43;
        $[76] = t45;
    } else {
        t45 = $[76];
    }
    const t46 = formData.availability === "Part-time";
    let t47;
    if ($[77] !== formData || $[78] !== setFormData) {
        t47 = ({
            "Step1[<input>.onChange]": (e_6)=>setFormData({
                    ...formData,
                    availability: e_6.target.value
                })
        })["Step1[<input>.onChange]"];
        $[77] = formData;
        $[78] = setFormData;
        $[79] = t47;
    } else {
        t47 = $[79];
    }
    let t48;
    if ($[80] !== t46 || $[81] !== t47) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "radio",
            id: "parttime",
            name: "availability",
            value: "Part-time",
            checked: t46,
            onChange: t47
        }, void 0, false, {
            fileName: "[project]/components/Register/Step1.tsx",
            lineNumber: 416,
            columnNumber: 11
        }, this);
        $[80] = t46;
        $[81] = t47;
        $[82] = t48;
    } else {
        t48 = $[82];
    }
    let t49;
    if ($[83] === Symbol.for("react.memo_cache_sentinel")) {
        t49 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            htmlFor: "parttime",
            children: "Part-time"
        }, void 0, false, {
            fileName: "[project]/components/Register/Step1.tsx",
            lineNumber: 425,
            columnNumber: 11
        }, this);
        $[83] = t49;
    } else {
        t49 = $[83];
    }
    let t50;
    if ($[84] !== t48) {
        t50 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "radio-option",
            children: [
                t48,
                t49
            ]
        }, void 0, true, {
            fileName: "[project]/components/Register/Step1.tsx",
            lineNumber: 432,
            columnNumber: 11
        }, this);
        $[84] = t48;
        $[85] = t50;
    } else {
        t50 = $[85];
    }
    let t51;
    if ($[86] !== t45 || $[87] !== t50) {
        t51 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "form-field full-width",
            children: [
                t40,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "radio-group",
                    children: [
                        t45,
                        t50
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Register/Step1.tsx",
                    lineNumber: 440,
                    columnNumber: 55
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Register/Step1.tsx",
            lineNumber: 440,
            columnNumber: 11
        }, this);
        $[86] = t45;
        $[87] = t50;
        $[88] = t51;
    } else {
        t51 = $[88];
    }
    let t52;
    if ($[89] === Symbol.for("react.memo_cache_sentinel")) {
        t52 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            htmlFor: "universityEmail",
            children: "University Email"
        }, void 0, false, {
            fileName: "[project]/components/Register/Step1.tsx",
            lineNumber: 449,
            columnNumber: 11
        }, this);
        $[89] = t52;
    } else {
        t52 = $[89];
    }
    const t53 = formData.email || "";
    let t54;
    if ($[90] !== formData || $[91] !== setFormData) {
        t54 = ({
            "Step1[<input>.onChange]": (e_7)=>setFormData({
                    ...formData,
                    email: e_7.target.value
                })
        })["Step1[<input>.onChange]"];
        $[90] = formData;
        $[91] = setFormData;
        $[92] = t54;
    } else {
        t54 = $[92];
    }
    let t55;
    if ($[93] !== t53 || $[94] !== t54) {
        t55 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "form-field full-width",
            children: [
                t52,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    id: "universityEmail",
                    type: "email",
                    placeholder: "nanu@techie.com",
                    value: t53,
                    onChange: t54
                }, void 0, false, {
                    fileName: "[project]/components/Register/Step1.tsx",
                    lineNumber: 471,
                    columnNumber: 55
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Register/Step1.tsx",
            lineNumber: 471,
            columnNumber: 11
        }, this);
        $[93] = t53;
        $[94] = t54;
        $[95] = t55;
    } else {
        t55 = $[95];
    }
    let t56;
    if ($[96] === Symbol.for("react.memo_cache_sentinel")) {
        t56 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            htmlFor: "password",
            children: "Create Password"
        }, void 0, false, {
            fileName: "[project]/components/Register/Step1.tsx",
            lineNumber: 480,
            columnNumber: 11
        }, this);
        $[96] = t56;
    } else {
        t56 = $[96];
    }
    const t57 = formData.password || "";
    let t58;
    if ($[97] !== formData || $[98] !== setFormData) {
        t58 = ({
            "Step1[<input>.onChange]": (e_8)=>setFormData({
                    ...formData,
                    password: e_8.target.value
                })
        })["Step1[<input>.onChange]"];
        $[97] = formData;
        $[98] = setFormData;
        $[99] = t58;
    } else {
        t58 = $[99];
    }
    let t59;
    if ($[100] !== t57 || $[101] !== t58) {
        t59 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "form-field full-width",
            children: [
                t56,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    id: "password",
                    type: "password",
                    placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
                    value: t57,
                    onChange: t58
                }, void 0, false, {
                    fileName: "[project]/components/Register/Step1.tsx",
                    lineNumber: 502,
                    columnNumber: 55
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Register/Step1.tsx",
            lineNumber: 502,
            columnNumber: 11
        }, this);
        $[100] = t57;
        $[101] = t58;
        $[102] = t59;
    } else {
        t59 = $[102];
    }
    let t60;
    if ($[103] !== t16 || $[104] !== t24 || $[105] !== t28 || $[106] !== t32 || $[107] !== t39 || $[108] !== t51 || $[109] !== t55 || $[110] !== t59) {
        t60 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "form-grid",
            children: [
                t16,
                t24,
                t28,
                t32,
                t39,
                t51,
                t55,
                t59
            ]
        }, void 0, true, {
            fileName: "[project]/components/Register/Step1.tsx",
            lineNumber: 511,
            columnNumber: 11
        }, this);
        $[103] = t16;
        $[104] = t24;
        $[105] = t28;
        $[106] = t32;
        $[107] = t39;
        $[108] = t51;
        $[109] = t55;
        $[110] = t59;
        $[111] = t60;
    } else {
        t60 = $[111];
    }
    let t61;
    if ($[112] !== error) {
        t61 = error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "register-error",
            children: error
        }, void 0, false, {
            fileName: "[project]/components/Register/Step1.tsx",
            lineNumber: 526,
            columnNumber: 20
        }, this);
        $[112] = error;
        $[113] = t61;
    } else {
        t61 = $[113];
    }
    let t62;
    if ($[114] === Symbol.for("react.memo_cache_sentinel")) {
        t62 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "form-actions",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "submit",
                className: "btn-next",
                children: "Continue to preferences"
            }, void 0, false, {
                fileName: "[project]/components/Register/Step1.tsx",
                lineNumber: 534,
                columnNumber: 41
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Register/Step1.tsx",
            lineNumber: 534,
            columnNumber: 11
        }, this);
        $[114] = t62;
    } else {
        t62 = $[114];
    }
    let t63;
    if ($[115] !== handleNext || $[116] !== t60 || $[117] !== t61) {
        t63 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "register-card",
            children: [
                t6,
                t10,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "register-form-content",
                    children: [
                        t11,
                        t12,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleNext,
                            children: [
                                t60,
                                t61,
                                t62
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Register/Step1.tsx",
                            lineNumber: 541,
                            columnNumber: 100
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Register/Step1.tsx",
                    lineNumber: 541,
                    columnNumber: 51
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Register/Step1.tsx",
            lineNumber: 541,
            columnNumber: 11
        }, this);
        $[115] = handleNext;
        $[116] = t60;
        $[117] = t61;
        $[118] = t63;
    } else {
        t63 = $[118];
    }
    let t64;
    if ($[119] !== t4 || $[120] !== t63) {
        t64 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "register-wrapper",
            children: [
                t4,
                t63
            ]
        }, void 0, true, {
            fileName: "[project]/components/Register/Step1.tsx",
            lineNumber: 551,
            columnNumber: 11
        }, this);
        $[119] = t4;
        $[120] = t63;
        $[121] = t64;
    } else {
        t64 = $[121];
    }
    return t64;
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
]);

//# sourceMappingURL=components_Register_Step1_tsx_593d2441._.js.map