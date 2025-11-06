(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/Register/Step2.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
function Step2() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(61);
    if ($[0] !== "43fac49fd473e53596452e2b08e253fd620b4f4dfac53be58c05a7fbd7509db2") {
        for(let $i = 0; $i < 61; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "43fac49fd473e53596452e2b08e253fd620b4f4dfac53be58c05a7fbd7509db2";
    }
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Register$2f$RegisterContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterContext"]);
    if (!context) {
        throw new Error("Step2 must be used within RegisterProvider");
    }
    const { formData, setFormData } = context;
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    let t0;
    if ($[1] !== formData.internshipPreferences) {
        t0 = formData.internshipPreferences || [];
        $[1] = formData.internshipPreferences;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    const [selectedPreferences, setSelectedPreferences] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    let t1;
    let t10;
    let t11;
    let t2;
    let t3;
    let t4;
    let t5;
    let t6;
    let t7;
    let t8;
    let t9;
    if ($[3] !== formData || $[4] !== router || $[5] !== selectedPreferences || $[6] !== setFormData) {
        const preferenceOptions = [
            {
                title: "UI/UX Design",
                desc: "Craft intuitive experiences aligned with design systems."
            },
            {
                title: "Product Management",
                desc: "Plan sprints, roadmaps, features, and coordinate cross-team stakeholders."
            },
            {
                title: "Cybersecurity",
                desc: "Monitor threats, conduct audits, and secure organizational systems."
            },
            {
                title: "Frontend Engineering",
                desc: "Bring interfaces to life with modern frameworks."
            },
            {
                title: "Backend Engineering",
                desc: "Design scalable services, APIs, and core logic."
            },
            {
                title: "Data Analysis",
                desc: "Extract insights using SQL, Python, and visualization tools."
            },
            {
                title: "Networking",
                desc: "Configure, secure, and troubleshoot network infrastructure."
            },
            {
                title: "Quality Assurance",
                desc: "Ensure code quality through testing and automation."
            }
        ];
        const handleNext = {
            "Step2[handleNext]": (e)=>{
                e.preventDefault();
                if (selectedPreferences.length !== 3) {
                    setError("Please select exactly 3 internship preferences.");
                    return;
                }
                setFormData({
                    ...formData,
                    internshipPreferences: selectedPreferences
                });
                setError("");
                router.push("/register/step3");
            }
        }["Step2[handleNext]"];
        const togglePreference = {
            "Step2[togglePreference]": (title)=>{
                if (selectedPreferences.includes(title)) {
                    setSelectedPreferences(selectedPreferences.filter({
                        "Step2[togglePreference > selectedPreferences.filter()]": (p)=>p !== title
                    }["Step2[togglePreference > selectedPreferences.filter()]"]));
                } else {
                    if (selectedPreferences.length < 3) {
                        setSelectedPreferences([
                            ...selectedPreferences,
                            title
                        ]);
                    }
                }
            }
        }["Step2[togglePreference]"];
        t10 = "register-wrapper";
        let t12;
        let t13;
        let t14;
        if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
            t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "register-badge",
                children: "NEXT STEP - STUDENT JOURNEY"
            }, void 0, false, {
                fileName: "[project]/components/Register/Step2.tsx",
                lineNumber: 104,
                columnNumber: 13
            }, this);
            t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "register-main-title",
                children: "Tailor your experience to the roles that inspire you."
            }, void 0, false, {
                fileName: "[project]/components/Register/Step2.tsx",
                lineNumber: 105,
                columnNumber: 13
            }, this);
            t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "register-subtitle",
                children: "Choose the tracks you'd like to explore so we can align placements, mentors, and resources to your priorities."
            }, void 0, false, {
                fileName: "[project]/components/Register/Step2.tsx",
                lineNumber: 106,
                columnNumber: 13
            }, this);
            $[18] = t12;
            $[19] = t13;
            $[20] = t14;
        } else {
            t12 = $[18];
            t13 = $[19];
            t14 = $[20];
        }
        if ($[21] !== router) {
            t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "register-header",
                children: [
                    t12,
                    t13,
                    t14,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "register-login-link",
                        children: [
                            "Already started? ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                onClick: {
                                    "Step2[<a>.onClick]": ()=>router.push("/")
                                }["Step2[<a>.onClick]"],
                                children: "Return to login"
                            }, void 0, false, {
                                fileName: "[project]/components/Register/Step2.tsx",
                                lineNumber: 116,
                                columnNumber: 113
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Register/Step2.tsx",
                        lineNumber: 116,
                        columnNumber: 61
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Register/Step2.tsx",
                lineNumber: 116,
                columnNumber: 13
            }, this);
            $[21] = router;
            $[22] = t11;
        } else {
            t11 = $[22];
        }
        t7 = "register-card";
        let t15;
        if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
            t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "step-label",
                children: "STEP 3 OF 5"
            }, void 0, false, {
                fileName: "[project]/components/Register/Step2.tsx",
                lineNumber: 127,
                columnNumber: 13
            }, this);
            $[23] = t15;
        } else {
            t15 = $[23];
        }
        if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
            t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "progress-container",
                children: [
                    t15,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "progress-bar-bg",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "progress-bar-fill",
                            style: {
                                width: "60%"
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/Register/Step2.tsx",
                            lineNumber: 133,
                            columnNumber: 86
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Register/Step2.tsx",
                        lineNumber: 133,
                        columnNumber: 53
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Register/Step2.tsx",
                lineNumber: 133,
                columnNumber: 12
            }, this);
            $[24] = t8;
        } else {
            t8 = $[24];
        }
        let t16;
        if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
            t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                    fileName: "[project]/components/Register/Step2.tsx",
                                    lineNumber: 142,
                                    columnNumber: 155
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: "12",
                                    cy: "7",
                                    r: "4"
                                }, void 0, false, {
                                    fileName: "[project]/components/Register/Step2.tsx",
                                    lineNumber: 142,
                                    columnNumber: 209
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Register/Step2.tsx",
                            lineNumber: 142,
                            columnNumber: 80
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Register/Step2.tsx",
                        lineNumber: 142,
                        columnNumber: 53
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "step-nav-label",
                        children: "Personal"
                    }, void 0, false, {
                        fileName: "[project]/components/Register/Step2.tsx",
                        lineNumber: 142,
                        columnNumber: 252
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Register/Step2.tsx",
                lineNumber: 142,
                columnNumber: 13
            }, this);
            $[25] = t16;
        } else {
            t16 = $[25];
        }
        let t17;
        if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
            t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                    fileName: "[project]/components/Register/Step2.tsx",
                                    lineNumber: 149,
                                    columnNumber: 155
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M6 12v5c3 3 9 3 12 0v-5"
                                }, void 0, false, {
                                    fileName: "[project]/components/Register/Step2.tsx",
                                    lineNumber: 149,
                                    columnNumber: 197
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Register/Step2.tsx",
                            lineNumber: 149,
                            columnNumber: 80
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Register/Step2.tsx",
                        lineNumber: 149,
                        columnNumber: 53
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "step-nav-label",
                        children: "Education"
                    }, void 0, false, {
                        fileName: "[project]/components/Register/Step2.tsx",
                        lineNumber: 149,
                        columnNumber: 245
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Register/Step2.tsx",
                lineNumber: 149,
                columnNumber: 13
            }, this);
            $[26] = t17;
        } else {
            t17 = $[26];
        }
        let t18;
        if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
            t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "step-nav-item active",
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
                                fileName: "[project]/components/Register/Step2.tsx",
                                lineNumber: 156,
                                columnNumber: 153
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Register/Step2.tsx",
                            lineNumber: 156,
                            columnNumber: 78
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Register/Step2.tsx",
                        lineNumber: 156,
                        columnNumber: 51
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "step-nav-label",
                        children: "Preferences"
                    }, void 0, false, {
                        fileName: "[project]/components/Register/Step2.tsx",
                        lineNumber: 156,
                        columnNumber: 280
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Register/Step2.tsx",
                lineNumber: 156,
                columnNumber: 13
            }, this);
            $[27] = t18;
        } else {
            t18 = $[27];
        }
        let t19;
        if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
            t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                    fileName: "[project]/components/Register/Step2.tsx",
                                    lineNumber: 163,
                                    columnNumber: 155
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                    points: "14 2 14 8 20 8"
                                }, void 0, false, {
                                    fileName: "[project]/components/Register/Step2.tsx",
                                    lineNumber: 163,
                                    columnNumber: 226
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Register/Step2.tsx",
                            lineNumber: 163,
                            columnNumber: 80
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Register/Step2.tsx",
                        lineNumber: 163,
                        columnNumber: 53
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "step-nav-label",
                        children: "Documents"
                    }, void 0, false, {
                        fileName: "[project]/components/Register/Step2.tsx",
                        lineNumber: 163,
                        columnNumber: 274
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Register/Step2.tsx",
                lineNumber: 163,
                columnNumber: 13
            }, this);
            $[28] = t19;
        } else {
            t19 = $[28];
        }
        if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
            t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "step-navigation",
                children: [
                    t16,
                    t17,
                    t18,
                    t19,
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
                                            fileName: "[project]/components/Register/Step2.tsx",
                                            lineNumber: 169,
                                            columnNumber: 207
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: "12",
                                            cy: "13",
                                            r: "4"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Register/Step2.tsx",
                                            lineNumber: 169,
                                            columnNumber: 301
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Register/Step2.tsx",
                                    lineNumber: 169,
                                    columnNumber: 132
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Register/Step2.tsx",
                                lineNumber: 169,
                                columnNumber: 105
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "step-nav-label",
                                children: "Photo"
                            }, void 0, false, {
                                fileName: "[project]/components/Register/Step2.tsx",
                                lineNumber: 169,
                                columnNumber: 345
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Register/Step2.tsx",
                        lineNumber: 169,
                        columnNumber: 65
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Register/Step2.tsx",
                lineNumber: 169,
                columnNumber: 12
            }, this);
            $[29] = t9;
        } else {
            t9 = $[29];
        }
        t4 = "register-form-content";
        if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
            t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "form-section-title",
                children: "Preferences"
            }, void 0, false, {
                fileName: "[project]/components/Register/Step2.tsx",
                lineNumber: 176,
                columnNumber: 12
            }, this);
            t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "form-section-subtitle",
                children: "Let us know the roles and tracks that excite you the most."
            }, void 0, false, {
                fileName: "[project]/components/Register/Step2.tsx",
                lineNumber: 177,
                columnNumber: 12
            }, this);
            $[30] = t5;
            $[31] = t6;
        } else {
            t5 = $[30];
            t6 = $[31];
        }
        t3 = handleNext;
        t1 = "preference-grid";
        t2 = preferenceOptions.map({
            "Step2[preferenceOptions.map()]": (option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `preference-card ${selectedPreferences.includes(option.title) ? "selected" : ""}`,
                    onClick: {
                        "Step2[preferenceOptions.map() > <div>.onClick]": ()=>togglePreference(option.title)
                    }["Step2[preferenceOptions.map() > <div>.onClick]"],
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                            children: option.title
                        }, void 0, false, {
                            fileName: "[project]/components/Register/Step2.tsx",
                            lineNumber: 189,
                            columnNumber: 60
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: option.desc
                        }, void 0, false, {
                            fileName: "[project]/components/Register/Step2.tsx",
                            lineNumber: 189,
                            columnNumber: 83
                        }, this)
                    ]
                }, option.title, true, {
                    fileName: "[project]/components/Register/Step2.tsx",
                    lineNumber: 187,
                    columnNumber: 51
                }, this)
        }["Step2[preferenceOptions.map()]"]);
        $[3] = formData;
        $[4] = router;
        $[5] = selectedPreferences;
        $[6] = setFormData;
        $[7] = t1;
        $[8] = t10;
        $[9] = t11;
        $[10] = t2;
        $[11] = t3;
        $[12] = t4;
        $[13] = t5;
        $[14] = t6;
        $[15] = t7;
        $[16] = t8;
        $[17] = t9;
    } else {
        t1 = $[7];
        t10 = $[8];
        t11 = $[9];
        t2 = $[10];
        t3 = $[11];
        t4 = $[12];
        t5 = $[13];
        t6 = $[14];
        t7 = $[15];
        t8 = $[16];
        t9 = $[17];
    }
    let t12;
    if ($[32] !== t1 || $[33] !== t2) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t1,
            children: t2
        }, void 0, false, {
            fileName: "[project]/components/Register/Step2.tsx",
            lineNumber: 221,
            columnNumber: 11
        }, this);
        $[32] = t1;
        $[33] = t2;
        $[34] = t12;
    } else {
        t12 = $[34];
    }
    let t13;
    if ($[35] !== error) {
        t13 = error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "register-error",
            children: error
        }, void 0, false, {
            fileName: "[project]/components/Register/Step2.tsx",
            lineNumber: 230,
            columnNumber: 20
        }, this);
        $[35] = error;
        $[36] = t13;
    } else {
        t13 = $[36];
    }
    let t14;
    if ($[37] !== router) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            className: "btn-back",
            onClick: {
                "Step2[<button>.onClick]": ()=>router.push("/register/step1-edu")
            }["Step2[<button>.onClick]"],
            children: "Back"
        }, void 0, false, {
            fileName: "[project]/components/Register/Step2.tsx",
            lineNumber: 238,
            columnNumber: 11
        }, this);
        $[37] = router;
        $[38] = t14;
    } else {
        t14 = $[38];
    }
    let t15;
    if ($[39] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "submit",
            className: "btn-next",
            children: "Continue to documents"
        }, void 0, false, {
            fileName: "[project]/components/Register/Step2.tsx",
            lineNumber: 248,
            columnNumber: 11
        }, this);
        $[39] = t15;
    } else {
        t15 = $[39];
    }
    let t16;
    if ($[40] !== t14) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "form-actions",
            children: [
                t14,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/components/Register/Step2.tsx",
            lineNumber: 255,
            columnNumber: 11
        }, this);
        $[40] = t14;
        $[41] = t16;
    } else {
        t16 = $[41];
    }
    let t17;
    if ($[42] !== t12 || $[43] !== t13 || $[44] !== t16 || $[45] !== t3) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: t3,
            children: [
                t12,
                t13,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/components/Register/Step2.tsx",
            lineNumber: 263,
            columnNumber: 11
        }, this);
        $[42] = t12;
        $[43] = t13;
        $[44] = t16;
        $[45] = t3;
        $[46] = t17;
    } else {
        t17 = $[46];
    }
    let t18;
    if ($[47] !== t17 || $[48] !== t4 || $[49] !== t5 || $[50] !== t6) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t4,
            children: [
                t5,
                t6,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/components/Register/Step2.tsx",
            lineNumber: 274,
            columnNumber: 11
        }, this);
        $[47] = t17;
        $[48] = t4;
        $[49] = t5;
        $[50] = t6;
        $[51] = t18;
    } else {
        t18 = $[51];
    }
    let t19;
    if ($[52] !== t18 || $[53] !== t7 || $[54] !== t8 || $[55] !== t9) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t7,
            children: [
                t8,
                t9,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/components/Register/Step2.tsx",
            lineNumber: 285,
            columnNumber: 11
        }, this);
        $[52] = t18;
        $[53] = t7;
        $[54] = t8;
        $[55] = t9;
        $[56] = t19;
    } else {
        t19 = $[56];
    }
    let t20;
    if ($[57] !== t10 || $[58] !== t11 || $[59] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t10,
            children: [
                t11,
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/components/Register/Step2.tsx",
            lineNumber: 296,
            columnNumber: 11
        }, this);
        $[57] = t10;
        $[58] = t11;
        $[59] = t19;
        $[60] = t20;
    } else {
        t20 = $[60];
    }
    return t20;
}
_s(Step2, "DmU0ZxC0twsbkZLM+0azTvTFhek=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Step2;
const __TURBOPACK__default__export__ = Step2;
var _c;
__turbopack_context__.k.register(_c, "Step2");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_77530b1a._.js.map