(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/Register/Step1Edu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
function Step1Edu() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(126);
    if ($[0] !== "b82941d104da2a7828e54b78c39e114156c9c03536a3e1f720faab5070f6e349") {
        for(let $i = 0; $i < 126; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b82941d104da2a7828e54b78c39e114156c9c03536a3e1f720faab5070f6e349";
    }
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Register$2f$RegisterContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterContext"]);
    if (!context) {
        throw new Error("Step1Edu must be used within RegisterProvider");
    }
    const { formData, setFormData } = context;
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [showPassword, setShowPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showConfirmPassword, setShowConfirmPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    let t0;
    if ($[1] !== formData.availability || $[2] !== formData.confirmPassword || $[3] !== formData.degreeProgramme || $[4] !== formData.email || $[5] !== formData.level || $[6] !== formData.password || $[7] !== formData.studentID || $[8] !== router) {
        t0 = ({
            "Step1Edu[handleNext]": async (e)=>{
                e.preventDefault();
                if (!formData.degreeProgramme || !formData.level || !formData.availability || !formData.email || !formData.password || !formData.confirmPassword) {
                    setError("All fields are required");
                    return;
                }
                if (formData.password !== formData.confirmPassword) {
                    setError("Passwords do not match");
                    return;
                }
                if (formData.password.length < 8) {
                    setError("Password must be at least 8 characters long");
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
        })["Step1Edu[handleNext]"];
        $[1] = formData.availability;
        $[2] = formData.confirmPassword;
        $[3] = formData.degreeProgramme;
        $[4] = formData.email;
        $[5] = formData.level;
        $[6] = formData.password;
        $[7] = formData.studentID;
        $[8] = router;
        $[9] = t0;
    } else {
        t0 = $[9];
    }
    const handleNext = t0;
    let t1;
    let t2;
    let t3;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "register-badge",
            children: "NEXT STEP - STUDENT JOURNEY"
        }, void 0, false, {
            fileName: "[project]/components/Register/Step1Edu.tsx",
            lineNumber: 87,
            columnNumber: 10
        }, this);
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "register-main-title",
            children: "Share your academic background and secure your account."
        }, void 0, false, {
            fileName: "[project]/components/Register/Step1Edu.tsx",
            lineNumber: 88,
            columnNumber: 10
        }, this);
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "register-subtitle",
            children: "Complete your educational details and create a secure password to protect your account."
        }, void 0, false, {
            fileName: "[project]/components/Register/Step1Edu.tsx",
            lineNumber: 89,
            columnNumber: 10
        }, this);
        $[10] = t1;
        $[11] = t2;
        $[12] = t3;
    } else {
        t1 = $[10];
        t2 = $[11];
        t3 = $[12];
    }
    let t4;
    if ($[13] !== router) {
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
                                "Step1Edu[<a>.onClick]": ()=>router.push("/")
                            }["Step1Edu[<a>.onClick]"],
                            children: "Return to login"
                        }, void 0, false, {
                            fileName: "[project]/components/Register/Step1Edu.tsx",
                            lineNumber: 100,
                            columnNumber: 107
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Register/Step1Edu.tsx",
                    lineNumber: 100,
                    columnNumber: 55
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Register/Step1Edu.tsx",
            lineNumber: 100,
            columnNumber: 10
        }, this);
        $[13] = router;
        $[14] = t4;
    } else {
        t4 = $[14];
    }
    let t5;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "step-label",
            children: "STEP 2 OF 5"
        }, void 0, false, {
            fileName: "[project]/components/Register/Step1Edu.tsx",
            lineNumber: 110,
            columnNumber: 10
        }, this);
        $[15] = t5;
    } else {
        t5 = $[15];
    }
    let t6;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "progress-container",
            children: [
                t5,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "progress-bar-bg",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "progress-bar-fill",
                        style: {
                            width: "40%"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/Register/Step1Edu.tsx",
                        lineNumber: 117,
                        columnNumber: 83
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Register/Step1Edu.tsx",
                    lineNumber: 117,
                    columnNumber: 50
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Register/Step1Edu.tsx",
            lineNumber: 117,
            columnNumber: 10
        }, this);
        $[16] = t6;
    } else {
        t6 = $[16];
    }
    let t7;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                fileName: "[project]/components/Register/Step1Edu.tsx",
                                lineNumber: 126,
                                columnNumber: 152
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "12",
                                cy: "7",
                                r: "4"
                            }, void 0, false, {
                                fileName: "[project]/components/Register/Step1Edu.tsx",
                                lineNumber: 126,
                                columnNumber: 206
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Register/Step1Edu.tsx",
                        lineNumber: 126,
                        columnNumber: 77
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Register/Step1Edu.tsx",
                    lineNumber: 126,
                    columnNumber: 50
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "step-nav-label",
                    children: "Personal"
                }, void 0, false, {
                    fileName: "[project]/components/Register/Step1Edu.tsx",
                    lineNumber: 126,
                    columnNumber: 249
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Register/Step1Edu.tsx",
            lineNumber: 126,
            columnNumber: 10
        }, this);
        $[17] = t7;
    } else {
        t7 = $[17];
    }
    let t8;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                d: "M22 10v6M2 10l10-5 10 5-10 5z"
                            }, void 0, false, {
                                fileName: "[project]/components/Register/Step1Edu.tsx",
                                lineNumber: 133,
                                columnNumber: 150
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M6 12v5c3 3 9 3 12 0v-5"
                            }, void 0, false, {
                                fileName: "[project]/components/Register/Step1Edu.tsx",
                                lineNumber: 133,
                                columnNumber: 192
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Register/Step1Edu.tsx",
                        lineNumber: 133,
                        columnNumber: 75
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Register/Step1Edu.tsx",
                    lineNumber: 133,
                    columnNumber: 48
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "step-nav-label",
                    children: "Education"
                }, void 0, false, {
                    fileName: "[project]/components/Register/Step1Edu.tsx",
                    lineNumber: 133,
                    columnNumber: 240
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Register/Step1Edu.tsx",
            lineNumber: 133,
            columnNumber: 10
        }, this);
        $[18] = t8;
    } else {
        t8 = $[18];
    }
    let t9;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
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
                            fileName: "[project]/components/Register/Step1Edu.tsx",
                            lineNumber: 140,
                            columnNumber: 152
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Register/Step1Edu.tsx",
                        lineNumber: 140,
                        columnNumber: 77
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Register/Step1Edu.tsx",
                    lineNumber: 140,
                    columnNumber: 50
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "step-nav-label",
                    children: "Preferences"
                }, void 0, false, {
                    fileName: "[project]/components/Register/Step1Edu.tsx",
                    lineNumber: 140,
                    columnNumber: 279
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Register/Step1Edu.tsx",
            lineNumber: 140,
            columnNumber: 10
        }, this);
        $[19] = t9;
    } else {
        t9 = $[19];
    }
    let t10;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
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
                                fileName: "[project]/components/Register/Step1Edu.tsx",
                                lineNumber: 147,
                                columnNumber: 153
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                points: "14 2 14 8 20 8"
                            }, void 0, false, {
                                fileName: "[project]/components/Register/Step1Edu.tsx",
                                lineNumber: 147,
                                columnNumber: 224
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Register/Step1Edu.tsx",
                        lineNumber: 147,
                        columnNumber: 78
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Register/Step1Edu.tsx",
                    lineNumber: 147,
                    columnNumber: 51
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "step-nav-label",
                    children: "Documents"
                }, void 0, false, {
                    fileName: "[project]/components/Register/Step1Edu.tsx",
                    lineNumber: 147,
                    columnNumber: 272
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Register/Step1Edu.tsx",
            lineNumber: 147,
            columnNumber: 11
        }, this);
        $[20] = t10;
    } else {
        t10 = $[20];
    }
    let t11;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
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
                                        fileName: "[project]/components/Register/Step1Edu.tsx",
                                        lineNumber: 154,
                                        columnNumber: 203
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "12",
                                        cy: "13",
                                        r: "4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Register/Step1Edu.tsx",
                                        lineNumber: 154,
                                        columnNumber: 297
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Register/Step1Edu.tsx",
                                lineNumber: 154,
                                columnNumber: 128
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Register/Step1Edu.tsx",
                            lineNumber: 154,
                            columnNumber: 101
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "step-nav-label",
                            children: "Photo"
                        }, void 0, false, {
                            fileName: "[project]/components/Register/Step1Edu.tsx",
                            lineNumber: 154,
                            columnNumber: 341
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Register/Step1Edu.tsx",
                    lineNumber: 154,
                    columnNumber: 61
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Register/Step1Edu.tsx",
            lineNumber: 154,
            columnNumber: 11
        }, this);
        $[21] = t11;
    } else {
        t11 = $[21];
    }
    let t12;
    let t13;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "form-section-title",
            children: "Education & Account"
        }, void 0, false, {
            fileName: "[project]/components/Register/Step1Edu.tsx",
            lineNumber: 162,
            columnNumber: 11
        }, this);
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "form-section-subtitle",
            children: "Tell us about your program and create your login credentials."
        }, void 0, false, {
            fileName: "[project]/components/Register/Step1Edu.tsx",
            lineNumber: 163,
            columnNumber: 11
        }, this);
        $[22] = t12;
        $[23] = t13;
    } else {
        t12 = $[22];
        t13 = $[23];
    }
    let t14;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            htmlFor: "degreeProgramme",
            children: "Degree Programme"
        }, void 0, false, {
            fileName: "[project]/components/Register/Step1Edu.tsx",
            lineNumber: 172,
            columnNumber: 11
        }, this);
        $[24] = t14;
    } else {
        t14 = $[24];
    }
    const t15 = formData.degreeProgramme || "";
    let t16;
    if ($[25] !== formData || $[26] !== setFormData) {
        t16 = ({
            "Step1Edu[<select>.onChange]": (e_0)=>setFormData({
                    ...formData,
                    degreeProgramme: e_0.target.value
                })
        })["Step1Edu[<select>.onChange]"];
        $[25] = formData;
        $[26] = setFormData;
        $[27] = t16;
    } else {
        t16 = $[27];
    }
    let t17;
    let t18;
    let t19;
    let t20;
    let t21;
    let t22;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "",
            children: "Select your programme"
        }, void 0, false, {
            fileName: "[project]/components/Register/Step1Edu.tsx",
            lineNumber: 199,
            columnNumber: 11
        }, this);
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "Software Engineering",
            children: "Software Engineering"
        }, void 0, false, {
            fileName: "[project]/components/Register/Step1Edu.tsx",
            lineNumber: 200,
            columnNumber: 11
        }, this);
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "Computer Science",
            children: "Computer Science"
        }, void 0, false, {
            fileName: "[project]/components/Register/Step1Edu.tsx",
            lineNumber: 201,
            columnNumber: 11
        }, this);
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "Cyber Security",
            children: "Cyber Security"
        }, void 0, false, {
            fileName: "[project]/components/Register/Step1Edu.tsx",
            lineNumber: 202,
            columnNumber: 11
        }, this);
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "Data Science",
            children: "Data Science"
        }, void 0, false, {
            fileName: "[project]/components/Register/Step1Edu.tsx",
            lineNumber: 203,
            columnNumber: 11
        }, this);
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "Information Technology",
            children: "Information Technology"
        }, void 0, false, {
            fileName: "[project]/components/Register/Step1Edu.tsx",
            lineNumber: 204,
            columnNumber: 11
        }, this);
        $[28] = t17;
        $[29] = t18;
        $[30] = t19;
        $[31] = t20;
        $[32] = t21;
        $[33] = t22;
    } else {
        t17 = $[28];
        t18 = $[29];
        t19 = $[30];
        t20 = $[31];
        t21 = $[32];
        t22 = $[33];
    }
    let t23;
    if ($[34] !== t15 || $[35] !== t16) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "form-field full-width",
            children: [
                t14,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                    id: "degreeProgramme",
                    value: t15,
                    onChange: t16,
                    children: [
                        t17,
                        t18,
                        t19,
                        t20,
                        t21,
                        t22
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Register/Step1Edu.tsx",
                    lineNumber: 221,
                    columnNumber: 55
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Register/Step1Edu.tsx",
            lineNumber: 221,
            columnNumber: 11
        }, this);
        $[34] = t15;
        $[35] = t16;
        $[36] = t23;
    } else {
        t23 = $[36];
    }
    let t24;
    if ($[37] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            htmlFor: "level",
            children: "Academic Level"
        }, void 0, false, {
            fileName: "[project]/components/Register/Step1Edu.tsx",
            lineNumber: 230,
            columnNumber: 11
        }, this);
        $[37] = t24;
    } else {
        t24 = $[37];
    }
    const t25 = formData.level || "";
    let t26;
    if ($[38] !== formData || $[39] !== setFormData) {
        t26 = ({
            "Step1Edu[<select>.onChange]": (e_1)=>setFormData({
                    ...formData,
                    level: e_1.target.value
                })
        })["Step1Edu[<select>.onChange]"];
        $[38] = formData;
        $[39] = setFormData;
        $[40] = t26;
    } else {
        t26 = $[40];
    }
    let t27;
    let t28;
    let t29;
    let t30;
    if ($[41] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "",
            children: "Select your level"
        }, void 0, false, {
            fileName: "[project]/components/Register/Step1Edu.tsx",
            lineNumber: 255,
            columnNumber: 11
        }, this);
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "Level 4",
            children: "Level 4"
        }, void 0, false, {
            fileName: "[project]/components/Register/Step1Edu.tsx",
            lineNumber: 256,
            columnNumber: 11
        }, this);
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "Level 5",
            children: "Level 5"
        }, void 0, false, {
            fileName: "[project]/components/Register/Step1Edu.tsx",
            lineNumber: 257,
            columnNumber: 11
        }, this);
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "Level 6",
            children: "Level 6"
        }, void 0, false, {
            fileName: "[project]/components/Register/Step1Edu.tsx",
            lineNumber: 258,
            columnNumber: 11
        }, this);
        $[41] = t27;
        $[42] = t28;
        $[43] = t29;
        $[44] = t30;
    } else {
        t27 = $[41];
        t28 = $[42];
        t29 = $[43];
        t30 = $[44];
    }
    let t31;
    if ($[45] !== t25 || $[46] !== t26) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "form-field full-width",
            children: [
                t24,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                    id: "level",
                    value: t25,
                    onChange: t26,
                    children: [
                        t27,
                        t28,
                        t29,
                        t30
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Register/Step1Edu.tsx",
                    lineNumber: 271,
                    columnNumber: 55
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Register/Step1Edu.tsx",
            lineNumber: 271,
            columnNumber: 11
        }, this);
        $[45] = t25;
        $[46] = t26;
        $[47] = t31;
    } else {
        t31 = $[47];
    }
    let t32;
    if ($[48] === Symbol.for("react.memo_cache_sentinel")) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            children: "Internship Availability"
        }, void 0, false, {
            fileName: "[project]/components/Register/Step1Edu.tsx",
            lineNumber: 280,
            columnNumber: 11
        }, this);
        $[48] = t32;
    } else {
        t32 = $[48];
    }
    const t33 = formData.availability === "Full-time";
    let t34;
    if ($[49] !== formData || $[50] !== setFormData) {
        t34 = ({
            "Step1Edu[<input>.onChange]": (e_2)=>setFormData({
                    ...formData,
                    availability: e_2.target.value
                })
        })["Step1Edu[<input>.onChange]"];
        $[49] = formData;
        $[50] = setFormData;
        $[51] = t34;
    } else {
        t34 = $[51];
    }
    let t35;
    if ($[52] !== t33 || $[53] !== t34) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "radio",
            id: "fulltime",
            name: "availability",
            value: "Full-time",
            checked: t33,
            onChange: t34
        }, void 0, false, {
            fileName: "[project]/components/Register/Step1Edu.tsx",
            lineNumber: 302,
            columnNumber: 11
        }, this);
        $[52] = t33;
        $[53] = t34;
        $[54] = t35;
    } else {
        t35 = $[54];
    }
    let t36;
    if ($[55] === Symbol.for("react.memo_cache_sentinel")) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            htmlFor: "fulltime",
            children: "Full-time (5 days/week)"
        }, void 0, false, {
            fileName: "[project]/components/Register/Step1Edu.tsx",
            lineNumber: 311,
            columnNumber: 11
        }, this);
        $[55] = t36;
    } else {
        t36 = $[55];
    }
    let t37;
    if ($[56] !== t35) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "radio-option",
            children: [
                t35,
                t36
            ]
        }, void 0, true, {
            fileName: "[project]/components/Register/Step1Edu.tsx",
            lineNumber: 318,
            columnNumber: 11
        }, this);
        $[56] = t35;
        $[57] = t37;
    } else {
        t37 = $[57];
    }
    const t38 = formData.availability === "Part-time";
    let t39;
    if ($[58] !== formData || $[59] !== setFormData) {
        t39 = ({
            "Step1Edu[<input>.onChange]": (e_3)=>setFormData({
                    ...formData,
                    availability: e_3.target.value
                })
        })["Step1Edu[<input>.onChange]"];
        $[58] = formData;
        $[59] = setFormData;
        $[60] = t39;
    } else {
        t39 = $[60];
    }
    let t40;
    if ($[61] !== t38 || $[62] !== t39) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "radio",
            id: "parttime",
            name: "availability",
            value: "Part-time",
            checked: t38,
            onChange: t39
        }, void 0, false, {
            fileName: "[project]/components/Register/Step1Edu.tsx",
            lineNumber: 341,
            columnNumber: 11
        }, this);
        $[61] = t38;
        $[62] = t39;
        $[63] = t40;
    } else {
        t40 = $[63];
    }
    let t41;
    if ($[64] === Symbol.for("react.memo_cache_sentinel")) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            htmlFor: "parttime",
            children: "Part-time (3 days/week)"
        }, void 0, false, {
            fileName: "[project]/components/Register/Step1Edu.tsx",
            lineNumber: 350,
            columnNumber: 11
        }, this);
        $[64] = t41;
    } else {
        t41 = $[64];
    }
    let t42;
    if ($[65] !== t40) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "radio-option",
            children: [
                t40,
                t41
            ]
        }, void 0, true, {
            fileName: "[project]/components/Register/Step1Edu.tsx",
            lineNumber: 357,
            columnNumber: 11
        }, this);
        $[65] = t40;
        $[66] = t42;
    } else {
        t42 = $[66];
    }
    let t43;
    if ($[67] !== t37 || $[68] !== t42) {
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "form-field full-width",
            children: [
                t32,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "radio-group",
                    children: [
                        t37,
                        t42
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Register/Step1Edu.tsx",
                    lineNumber: 365,
                    columnNumber: 55
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Register/Step1Edu.tsx",
            lineNumber: 365,
            columnNumber: 11
        }, this);
        $[67] = t37;
        $[68] = t42;
        $[69] = t43;
    } else {
        t43 = $[69];
    }
    let t44;
    if ($[70] === Symbol.for("react.memo_cache_sentinel")) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            htmlFor: "universityEmail",
            children: "University Email"
        }, void 0, false, {
            fileName: "[project]/components/Register/Step1Edu.tsx",
            lineNumber: 374,
            columnNumber: 11
        }, this);
        $[70] = t44;
    } else {
        t44 = $[70];
    }
    const t45 = `${formData.studentID || "CB012345"}@students.apiit.lk`;
    const t46 = formData.email || "";
    let t47;
    if ($[71] !== formData || $[72] !== setFormData) {
        t47 = ({
            "Step1Edu[<input>.onChange]": (e_4)=>setFormData({
                    ...formData,
                    email: e_4.target.value
                })
        })["Step1Edu[<input>.onChange]"];
        $[71] = formData;
        $[72] = setFormData;
        $[73] = t47;
    } else {
        t47 = $[73];
    }
    let t48;
    if ($[74] !== t45 || $[75] !== t46 || $[76] !== t47) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "form-field full-width",
            children: [
                t44,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    id: "universityEmail",
                    type: "email",
                    placeholder: t45,
                    value: t46,
                    onChange: t47
                }, void 0, false, {
                    fileName: "[project]/components/Register/Step1Edu.tsx",
                    lineNumber: 397,
                    columnNumber: 55
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Register/Step1Edu.tsx",
            lineNumber: 397,
            columnNumber: 11
        }, this);
        $[74] = t45;
        $[75] = t46;
        $[76] = t47;
        $[77] = t48;
    } else {
        t48 = $[77];
    }
    let t49;
    if ($[78] === Symbol.for("react.memo_cache_sentinel")) {
        t49 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            htmlFor: "password",
            children: "Create Password"
        }, void 0, false, {
            fileName: "[project]/components/Register/Step1Edu.tsx",
            lineNumber: 407,
            columnNumber: 11
        }, this);
        $[78] = t49;
    } else {
        t49 = $[78];
    }
    const t50 = showPassword ? "text" : "password";
    const t51 = formData.password || "";
    let t52;
    if ($[79] !== formData || $[80] !== setFormData) {
        t52 = ({
            "Step1Edu[<input>.onChange]": (e_5)=>setFormData({
                    ...formData,
                    password: e_5.target.value
                })
        })["Step1Edu[<input>.onChange]"];
        $[79] = formData;
        $[80] = setFormData;
        $[81] = t52;
    } else {
        t52 = $[81];
    }
    let t53;
    if ($[82] !== t50 || $[83] !== t51 || $[84] !== t52) {
        t53 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            id: "password",
            type: t50,
            className: "password-input",
            placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
            value: t51,
            onChange: t52
        }, void 0, false, {
            fileName: "[project]/components/Register/Step1Edu.tsx",
            lineNumber: 430,
            columnNumber: 11
        }, this);
        $[82] = t50;
        $[83] = t51;
        $[84] = t52;
        $[85] = t53;
    } else {
        t53 = $[85];
    }
    let t54;
    if ($[86] !== showPassword) {
        t54 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            className: "toggle-password-btn",
            onClick: {
                "Step1Edu[<button>.onClick]": ()=>setShowPassword(!showPassword)
            }["Step1Edu[<button>.onClick]"],
            children: showPassword ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "eye-icon",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"
                    }, void 0, false, {
                        fileName: "[project]/components/Register/Step1Edu.tsx",
                        lineNumber: 442,
                        columnNumber: 150
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "1",
                        y1: "1",
                        x2: "23",
                        y2: "23"
                    }, void 0, false, {
                        fileName: "[project]/components/Register/Step1Edu.tsx",
                        lineNumber: 442,
                        columnNumber: 343
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Register/Step1Edu.tsx",
                lineNumber: 442,
                columnNumber: 54
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "eye-icon",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                    }, void 0, false, {
                        fileName: "[project]/components/Register/Step1Edu.tsx",
                        lineNumber: 442,
                        columnNumber: 486
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "12",
                        cy: "12",
                        r: "3"
                    }, void 0, false, {
                        fileName: "[project]/components/Register/Step1Edu.tsx",
                        lineNumber: 442,
                        columnNumber: 543
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Register/Step1Edu.tsx",
                lineNumber: 442,
                columnNumber: 390
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Register/Step1Edu.tsx",
            lineNumber: 440,
            columnNumber: 11
        }, this);
        $[86] = showPassword;
        $[87] = t54;
    } else {
        t54 = $[87];
    }
    let t55;
    if ($[88] !== t53 || $[89] !== t54) {
        t55 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "form-field",
            children: [
                t49,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "input-wrapper",
                    children: [
                        t53,
                        t54
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Register/Step1Edu.tsx",
                    lineNumber: 450,
                    columnNumber: 44
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Register/Step1Edu.tsx",
            lineNumber: 450,
            columnNumber: 11
        }, this);
        $[88] = t53;
        $[89] = t54;
        $[90] = t55;
    } else {
        t55 = $[90];
    }
    let t56;
    if ($[91] === Symbol.for("react.memo_cache_sentinel")) {
        t56 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            htmlFor: "confirmPassword",
            children: "Confirm Password"
        }, void 0, false, {
            fileName: "[project]/components/Register/Step1Edu.tsx",
            lineNumber: 459,
            columnNumber: 11
        }, this);
        $[91] = t56;
    } else {
        t56 = $[91];
    }
    const t57 = showConfirmPassword ? "text" : "password";
    const t58 = formData.confirmPassword || "";
    let t59;
    if ($[92] !== formData || $[93] !== setFormData) {
        t59 = ({
            "Step1Edu[<input>.onChange]": (e_6)=>setFormData({
                    ...formData,
                    confirmPassword: e_6.target.value
                })
        })["Step1Edu[<input>.onChange]"];
        $[92] = formData;
        $[93] = setFormData;
        $[94] = t59;
    } else {
        t59 = $[94];
    }
    let t60;
    if ($[95] !== t57 || $[96] !== t58 || $[97] !== t59) {
        t60 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            id: "confirmPassword",
            type: t57,
            className: "password-input",
            placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
            value: t58,
            onChange: t59
        }, void 0, false, {
            fileName: "[project]/components/Register/Step1Edu.tsx",
            lineNumber: 482,
            columnNumber: 11
        }, this);
        $[95] = t57;
        $[96] = t58;
        $[97] = t59;
        $[98] = t60;
    } else {
        t60 = $[98];
    }
    let t61;
    if ($[99] !== showConfirmPassword) {
        t61 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            className: "toggle-password-btn",
            onClick: {
                "Step1Edu[<button>.onClick]": ()=>setShowConfirmPassword(!showConfirmPassword)
            }["Step1Edu[<button>.onClick]"],
            children: showConfirmPassword ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "eye-icon",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"
                    }, void 0, false, {
                        fileName: "[project]/components/Register/Step1Edu.tsx",
                        lineNumber: 494,
                        columnNumber: 157
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "1",
                        y1: "1",
                        x2: "23",
                        y2: "23"
                    }, void 0, false, {
                        fileName: "[project]/components/Register/Step1Edu.tsx",
                        lineNumber: 494,
                        columnNumber: 350
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Register/Step1Edu.tsx",
                lineNumber: 494,
                columnNumber: 61
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "eye-icon",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                    }, void 0, false, {
                        fileName: "[project]/components/Register/Step1Edu.tsx",
                        lineNumber: 494,
                        columnNumber: 493
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "12",
                        cy: "12",
                        r: "3"
                    }, void 0, false, {
                        fileName: "[project]/components/Register/Step1Edu.tsx",
                        lineNumber: 494,
                        columnNumber: 550
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Register/Step1Edu.tsx",
                lineNumber: 494,
                columnNumber: 397
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Register/Step1Edu.tsx",
            lineNumber: 492,
            columnNumber: 11
        }, this);
        $[99] = showConfirmPassword;
        $[100] = t61;
    } else {
        t61 = $[100];
    }
    let t62;
    if ($[101] !== t60 || $[102] !== t61) {
        t62 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "form-field",
            children: [
                t56,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "input-wrapper",
                    children: [
                        t60,
                        t61
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Register/Step1Edu.tsx",
                    lineNumber: 502,
                    columnNumber: 44
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Register/Step1Edu.tsx",
            lineNumber: 502,
            columnNumber: 11
        }, this);
        $[101] = t60;
        $[102] = t61;
        $[103] = t62;
    } else {
        t62 = $[103];
    }
    let t63;
    if ($[104] !== t23 || $[105] !== t31 || $[106] !== t43 || $[107] !== t48 || $[108] !== t55 || $[109] !== t62) {
        t63 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "form-grid",
            children: [
                t23,
                t31,
                t43,
                t48,
                t55,
                t62
            ]
        }, void 0, true, {
            fileName: "[project]/components/Register/Step1Edu.tsx",
            lineNumber: 511,
            columnNumber: 11
        }, this);
        $[104] = t23;
        $[105] = t31;
        $[106] = t43;
        $[107] = t48;
        $[108] = t55;
        $[109] = t62;
        $[110] = t63;
    } else {
        t63 = $[110];
    }
    let t64;
    if ($[111] !== error) {
        t64 = error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "register-error",
            children: error
        }, void 0, false, {
            fileName: "[project]/components/Register/Step1Edu.tsx",
            lineNumber: 524,
            columnNumber: 20
        }, this);
        $[111] = error;
        $[112] = t64;
    } else {
        t64 = $[112];
    }
    let t65;
    if ($[113] !== router) {
        t65 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            className: "btn-back",
            onClick: {
                "Step1Edu[<button>.onClick]": ()=>router.push("/register/step1")
            }["Step1Edu[<button>.onClick]"],
            children: "Back"
        }, void 0, false, {
            fileName: "[project]/components/Register/Step1Edu.tsx",
            lineNumber: 532,
            columnNumber: 11
        }, this);
        $[113] = router;
        $[114] = t65;
    } else {
        t65 = $[114];
    }
    let t66;
    if ($[115] === Symbol.for("react.memo_cache_sentinel")) {
        t66 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "submit",
            className: "btn-next",
            children: "Continue to preferences"
        }, void 0, false, {
            fileName: "[project]/components/Register/Step1Edu.tsx",
            lineNumber: 542,
            columnNumber: 11
        }, this);
        $[115] = t66;
    } else {
        t66 = $[115];
    }
    let t67;
    if ($[116] !== t65) {
        t67 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "form-actions",
            children: [
                t65,
                t66
            ]
        }, void 0, true, {
            fileName: "[project]/components/Register/Step1Edu.tsx",
            lineNumber: 549,
            columnNumber: 11
        }, this);
        $[116] = t65;
        $[117] = t67;
    } else {
        t67 = $[117];
    }
    let t68;
    if ($[118] !== handleNext || $[119] !== t63 || $[120] !== t64 || $[121] !== t67) {
        t68 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                t63,
                                t64,
                                t67
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Register/Step1Edu.tsx",
                            lineNumber: 557,
                            columnNumber: 100
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Register/Step1Edu.tsx",
                    lineNumber: 557,
                    columnNumber: 51
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Register/Step1Edu.tsx",
            lineNumber: 557,
            columnNumber: 11
        }, this);
        $[118] = handleNext;
        $[119] = t63;
        $[120] = t64;
        $[121] = t67;
        $[122] = t68;
    } else {
        t68 = $[122];
    }
    let t69;
    if ($[123] !== t4 || $[124] !== t68) {
        t69 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "register-wrapper",
            children: [
                t4,
                t68
            ]
        }, void 0, true, {
            fileName: "[project]/components/Register/Step1Edu.tsx",
            lineNumber: 568,
            columnNumber: 11
        }, this);
        $[123] = t4;
        $[124] = t68;
        $[125] = t69;
    } else {
        t69 = $[125];
    }
    return t69;
}
_s(Step1Edu, "m6LeASXN8EIqpRbeNkyIS//Rg6k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Step1Edu;
const __TURBOPACK__default__export__ = Step1Edu;
var _c;
__turbopack_context__.k.register(_c, "Step1Edu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_Register_Step1Edu_tsx_6b0215a4._.js.map