(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/Register/Step4.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
function Step4() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(95);
    if ($[0] !== "7e6ac649b67746fb81dd2b40cc279953aaec1323bd1ca36dbeb5571d30c39126") {
        for(let $i = 0; $i < 95; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "7e6ac649b67746fb81dd2b40cc279953aaec1323bd1ca36dbeb5571d30c39126";
    }
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Register$2f$RegisterContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterContext"]);
    if (!context) {
        throw new Error("Step4 must be used within RegisterProvider");
    }
    const { formData } = context;
    const [profilePic, setProfilePic] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [previewUrl, setPreviewUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [success, setSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "Step4[handleFileChange]": (e)=>{
                const file = e.target.files?.[0];
                if (!file) {
                    return;
                }
                if (![
                    "image/jpeg",
                    "image/png"
                ].includes(file.type)) {
                    setError("Only JPG or PNG images are allowed for profile picture");
                    return;
                }
                if (file.size > 2097152) {
                    setError("Profile picture size must not exceed 2 MB");
                    return;
                }
                setError("");
                setProfilePic(file);
                setPreviewUrl(URL.createObjectURL(file));
            }
        })["Step4[handleFileChange]"];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const handleFileChange = t0;
    let t1;
    if ($[2] !== formData.availability || $[3] !== formData.contactNumber || $[4] !== formData.cv || $[5] !== formData.degreeProgramme || $[6] !== formData.email || $[7] !== formData.firstName || $[8] !== formData.internshipPreferences || $[9] !== formData.lastName || $[10] !== formData.level || $[11] !== formData.password || $[12] !== formData.studentID || $[13] !== profilePic || $[14] !== router) {
        t1 = ({
            "Step4[handleSubmit]": async (e_0)=>{
                e_0.preventDefault();
                if (!profilePic) {
                    setError("Please upload your profile picture");
                    return;
                }
                ;
                try {
                    const data = new FormData();
                    data.append("studentID", formData.studentID);
                    data.append("firstName", formData.firstName);
                    data.append("lastName", formData.lastName);
                    data.append("contactNumber", formData.contactNumber);
                    data.append("degreeProgramme", formData.degreeProgramme);
                    data.append("level", formData.level);
                    data.append("email", formData.email);
                    data.append("password", formData.password);
                    data.append("availability", formData.availability);
                    formData.internshipPreferences.forEach({
                        "Step4[handleSubmit > formData.internshipPreferences.forEach()]": (pref)=>{
                            data.append("internshipPreferences", pref);
                        }
                    }["Step4[handleSubmit > formData.internshipPreferences.forEach()]"]);
                    if (formData.cv) {
                        data.append("cv", formData.cv);
                    }
                    data.append("profilePic", profilePic);
                    await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("http://localhost:5000/api/auth/register", data, {
                        headers: {
                            "Content-Type": "multipart/form-data"
                        }
                    });
                    setSuccess("Registration successful! Redirecting to login...");
                    setTimeout({
                        "Step4[handleSubmit > setTimeout()]": ()=>{
                            router.push("/");
                        }
                    }["Step4[handleSubmit > setTimeout()]"], 2000);
                } catch (t2) {
                    const err = t2;
                    console.error(err);
                    setError("Error during registration. Please try again.");
                }
            }
        })["Step4[handleSubmit]"];
        $[2] = formData.availability;
        $[3] = formData.contactNumber;
        $[4] = formData.cv;
        $[5] = formData.degreeProgramme;
        $[6] = formData.email;
        $[7] = formData.firstName;
        $[8] = formData.internshipPreferences;
        $[9] = formData.lastName;
        $[10] = formData.level;
        $[11] = formData.password;
        $[12] = formData.studentID;
        $[13] = profilePic;
        $[14] = router;
        $[15] = t1;
    } else {
        t1 = $[15];
    }
    const handleSubmit = t1;
    let t2;
    let t3;
    let t4;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "register-badge",
            children: "NEXT STEP - STUDENT JOURNEY"
        }, void 0, false, {
            fileName: "[project]/components/Register/Step4.tsx",
            lineNumber: 125,
            columnNumber: 10
        }, this);
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "register-main-title",
            children: "Bring everything together and finalise your profile."
        }, void 0, false, {
            fileName: "[project]/components/Register/Step4.tsx",
            lineNumber: 126,
            columnNumber: 10
        }, this);
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "register-subtitle",
            children: "Add a professional photo and confirm your details so coordinators can recognize you instantly."
        }, void 0, false, {
            fileName: "[project]/components/Register/Step4.tsx",
            lineNumber: 127,
            columnNumber: 10
        }, this);
        $[16] = t2;
        $[17] = t3;
        $[18] = t4;
    } else {
        t2 = $[16];
        t3 = $[17];
        t4 = $[18];
    }
    let t5;
    if ($[19] !== router) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "register-header",
            children: [
                t2,
                t3,
                t4,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "register-login-link",
                    children: [
                        "Already started? ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            onClick: {
                                "Step4[<a>.onClick]": ()=>router.push("/")
                            }["Step4[<a>.onClick]"],
                            children: "Return to login"
                        }, void 0, false, {
                            fileName: "[project]/components/Register/Step4.tsx",
                            lineNumber: 138,
                            columnNumber: 107
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Register/Step4.tsx",
                    lineNumber: 138,
                    columnNumber: 55
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Register/Step4.tsx",
            lineNumber: 138,
            columnNumber: 10
        }, this);
        $[19] = router;
        $[20] = t5;
    } else {
        t5 = $[20];
    }
    let t6;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "step-label",
            children: "STEP 5 OF 5"
        }, void 0, false, {
            fileName: "[project]/components/Register/Step4.tsx",
            lineNumber: 148,
            columnNumber: 10
        }, this);
        $[21] = t6;
    } else {
        t6 = $[21];
    }
    let t7;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "progress-container",
            children: [
                t6,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "progress-bar-bg",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "progress-bar-fill",
                        style: {
                            width: "100%"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/Register/Step4.tsx",
                        lineNumber: 155,
                        columnNumber: 83
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Register/Step4.tsx",
                    lineNumber: 155,
                    columnNumber: 50
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Register/Step4.tsx",
            lineNumber: 155,
            columnNumber: 10
        }, this);
        $[22] = t7;
    } else {
        t7 = $[22];
    }
    let t8;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
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
                                d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                            }, void 0, false, {
                                fileName: "[project]/components/Register/Step4.tsx",
                                lineNumber: 164,
                                columnNumber: 152
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "12",
                                cy: "7",
                                r: "4"
                            }, void 0, false, {
                                fileName: "[project]/components/Register/Step4.tsx",
                                lineNumber: 164,
                                columnNumber: 206
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Register/Step4.tsx",
                        lineNumber: 164,
                        columnNumber: 77
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Register/Step4.tsx",
                    lineNumber: 164,
                    columnNumber: 50
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "step-nav-label",
                    children: "Personal"
                }, void 0, false, {
                    fileName: "[project]/components/Register/Step4.tsx",
                    lineNumber: 164,
                    columnNumber: 249
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Register/Step4.tsx",
            lineNumber: 164,
            columnNumber: 10
        }, this);
        $[23] = t8;
    } else {
        t8 = $[23];
    }
    let t9;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
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
                                d: "M22 10v6M2 10l10-5 10 5-10 5z"
                            }, void 0, false, {
                                fileName: "[project]/components/Register/Step4.tsx",
                                lineNumber: 171,
                                columnNumber: 152
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M6 12v5c3 3 9 3 12 0v-5"
                            }, void 0, false, {
                                fileName: "[project]/components/Register/Step4.tsx",
                                lineNumber: 171,
                                columnNumber: 194
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Register/Step4.tsx",
                        lineNumber: 171,
                        columnNumber: 77
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Register/Step4.tsx",
                    lineNumber: 171,
                    columnNumber: 50
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "step-nav-label",
                    children: "Education"
                }, void 0, false, {
                    fileName: "[project]/components/Register/Step4.tsx",
                    lineNumber: 171,
                    columnNumber: 242
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Register/Step4.tsx",
            lineNumber: 171,
            columnNumber: 10
        }, this);
        $[24] = t9;
    } else {
        t9 = $[24];
    }
    let t10;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
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
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                            points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                        }, void 0, false, {
                            fileName: "[project]/components/Register/Step4.tsx",
                            lineNumber: 178,
                            columnNumber: 153
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Register/Step4.tsx",
                        lineNumber: 178,
                        columnNumber: 78
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Register/Step4.tsx",
                    lineNumber: 178,
                    columnNumber: 51
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "step-nav-label",
                    children: "Preferences"
                }, void 0, false, {
                    fileName: "[project]/components/Register/Step4.tsx",
                    lineNumber: 178,
                    columnNumber: 280
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Register/Step4.tsx",
            lineNumber: 178,
            columnNumber: 11
        }, this);
        $[25] = t10;
    } else {
        t10 = $[25];
    }
    let t11;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
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
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                            }, void 0, false, {
                                fileName: "[project]/components/Register/Step4.tsx",
                                lineNumber: 185,
                                columnNumber: 153
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                points: "14 2 14 8 20 8"
                            }, void 0, false, {
                                fileName: "[project]/components/Register/Step4.tsx",
                                lineNumber: 185,
                                columnNumber: 224
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Register/Step4.tsx",
                        lineNumber: 185,
                        columnNumber: 78
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Register/Step4.tsx",
                    lineNumber: 185,
                    columnNumber: 51
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "step-nav-label",
                    children: "Documents"
                }, void 0, false, {
                    fileName: "[project]/components/Register/Step4.tsx",
                    lineNumber: 185,
                    columnNumber: 272
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Register/Step4.tsx",
            lineNumber: 185,
            columnNumber: 11
        }, this);
        $[26] = t11;
    } else {
        t11 = $[26];
    }
    let t12;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "step-navigation",
            children: [
                t8,
                t9,
                t10,
                t11,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                        d: "M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Register/Step4.tsx",
                                        lineNumber: 192,
                                        columnNumber: 202
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "12",
                                        cy: "13",
                                        r: "4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Register/Step4.tsx",
                                        lineNumber: 192,
                                        columnNumber: 296
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Register/Step4.tsx",
                                lineNumber: 192,
                                columnNumber: 127
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Register/Step4.tsx",
                            lineNumber: 192,
                            columnNumber: 100
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "step-nav-label",
                            children: "Photo"
                        }, void 0, false, {
                            fileName: "[project]/components/Register/Step4.tsx",
                            lineNumber: 192,
                            columnNumber: 340
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Register/Step4.tsx",
                    lineNumber: 192,
                    columnNumber: 62
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Register/Step4.tsx",
            lineNumber: 192,
            columnNumber: 11
        }, this);
        $[27] = t12;
    } else {
        t12 = $[27];
    }
    let t13;
    let t14;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "form-section-title",
            children: "Profile"
        }, void 0, false, {
            fileName: "[project]/components/Register/Step4.tsx",
            lineNumber: 200,
            columnNumber: 11
        }, this);
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "form-section-subtitle",
            children: "Add a face to your journey with a professional profile photo."
        }, void 0, false, {
            fileName: "[project]/components/Register/Step4.tsx",
            lineNumber: 201,
            columnNumber: 11
        }, this);
        $[28] = t13;
        $[29] = t14;
    } else {
        t13 = $[28];
        t14 = $[29];
    }
    let t15;
    if ($[30] !== previewUrl) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "profile-image-circle",
            children: previewUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: previewUrl,
                alt: "Profile",
                className: "profile-image-preview"
            }, void 0, false, {
                fileName: "[project]/components/Register/Step4.tsx",
                lineNumber: 210,
                columnNumber: 63
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                    }, void 0, false, {
                        fileName: "[project]/components/Register/Step4.tsx",
                        lineNumber: 210,
                        columnNumber: 213
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "12",
                        cy: "7",
                        r: "4"
                    }, void 0, false, {
                        fileName: "[project]/components/Register/Step4.tsx",
                        lineNumber: 210,
                        columnNumber: 267
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Register/Step4.tsx",
                lineNumber: 210,
                columnNumber: 138
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Register/Step4.tsx",
            lineNumber: 210,
            columnNumber: 11
        }, this);
        $[30] = previewUrl;
        $[31] = t15;
    } else {
        t15 = $[31];
    }
    let t16;
    if ($[32] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = {
            fontSize: "13px",
            fontWeight: 600,
            marginBottom: "8px"
        };
        $[32] = t16;
    } else {
        t16 = $[32];
    }
    const t17 = profilePic ? "No file selected" : "No file selected";
    let t18;
    if ($[33] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            style: t16,
            children: t17
        }, void 0, false, {
            fileName: "[project]/components/Register/Step4.tsx",
            lineNumber: 230,
            columnNumber: 11
        }, this);
        $[33] = t17;
        $[34] = t18;
    } else {
        t18 = $[34];
    }
    let t19;
    if ($[35] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = ({
            "Step4[<button>.onClick]": ()=>fileInputRef.current?.click()
        })["Step4[<button>.onClick]"];
        $[35] = t19;
    } else {
        t19 = $[35];
    }
    const t20 = profilePic ? "Change photo" : "Upload a new photo";
    let t21;
    if ($[36] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: t19,
            children: t20
        }, void 0, false, {
            fileName: "[project]/components/Register/Step4.tsx",
            lineNumber: 248,
            columnNumber: 11
        }, this);
        $[36] = t20;
        $[37] = t21;
    } else {
        t21 = $[37];
    }
    let t22;
    if ($[38] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            ref: fileInputRef,
            type: "file",
            accept: ".jpg,.jpeg,.png",
            onChange: handleFileChange,
            className: "file-upload-input"
        }, void 0, false, {
            fileName: "[project]/components/Register/Step4.tsx",
            lineNumber: 256,
            columnNumber: 11
        }, this);
        $[38] = t22;
    } else {
        t22 = $[38];
    }
    let t23;
    if ($[39] !== t18 || $[40] !== t21) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "upload-prompt",
            children: [
                t18,
                t21,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/components/Register/Step4.tsx",
            lineNumber: 263,
            columnNumber: 11
        }, this);
        $[39] = t18;
        $[40] = t21;
        $[41] = t23;
    } else {
        t23 = $[41];
    }
    let t24;
    if ($[42] !== t15 || $[43] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "profile-image-section",
            children: [
                t15,
                t23
            ]
        }, void 0, true, {
            fileName: "[project]/components/Register/Step4.tsx",
            lineNumber: 272,
            columnNumber: 11
        }, this);
        $[42] = t15;
        $[43] = t23;
        $[44] = t24;
    } else {
        t24 = $[44];
    }
    let t25;
    if ($[45] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            children: "Review your details"
        }, void 0, false, {
            fileName: "[project]/components/Register/Step4.tsx",
            lineNumber: 281,
            columnNumber: 11
        }, this);
        $[45] = t25;
    } else {
        t25 = $[45];
    }
    let t26;
    if ($[46] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "detail-label",
            children: "Student ID"
        }, void 0, false, {
            fileName: "[project]/components/Register/Step4.tsx",
            lineNumber: 288,
            columnNumber: 11
        }, this);
        $[46] = t26;
    } else {
        t26 = $[46];
    }
    const t27 = formData.studentID || "\u2014";
    let t28;
    if ($[47] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "detail-row",
            children: [
                t26,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "detail-value",
                    children: t27
                }, void 0, false, {
                    fileName: "[project]/components/Register/Step4.tsx",
                    lineNumber: 296,
                    columnNumber: 44
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Register/Step4.tsx",
            lineNumber: 296,
            columnNumber: 11
        }, this);
        $[47] = t27;
        $[48] = t28;
    } else {
        t28 = $[48];
    }
    let t29;
    if ($[49] === Symbol.for("react.memo_cache_sentinel")) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "detail-label",
            children: "Name"
        }, void 0, false, {
            fileName: "[project]/components/Register/Step4.tsx",
            lineNumber: 304,
            columnNumber: 11
        }, this);
        $[49] = t29;
    } else {
        t29 = $[49];
    }
    let t30;
    if ($[50] !== formData.firstName || $[51] !== formData.lastName) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "detail-row",
            children: [
                t29,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "detail-value",
                    children: [
                        formData.firstName,
                        " ",
                        formData.lastName
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Register/Step4.tsx",
                    lineNumber: 311,
                    columnNumber: 44
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Register/Step4.tsx",
            lineNumber: 311,
            columnNumber: 11
        }, this);
        $[50] = formData.firstName;
        $[51] = formData.lastName;
        $[52] = t30;
    } else {
        t30 = $[52];
    }
    let t31;
    if ($[53] === Symbol.for("react.memo_cache_sentinel")) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "detail-label",
            children: "Programme"
        }, void 0, false, {
            fileName: "[project]/components/Register/Step4.tsx",
            lineNumber: 320,
            columnNumber: 11
        }, this);
        $[53] = t31;
    } else {
        t31 = $[53];
    }
    const t32 = formData.degreeProgramme || "\u2014";
    let t33;
    if ($[54] !== t32) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "detail-row",
            children: [
                t31,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "detail-value",
                    children: t32
                }, void 0, false, {
                    fileName: "[project]/components/Register/Step4.tsx",
                    lineNumber: 328,
                    columnNumber: 44
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Register/Step4.tsx",
            lineNumber: 328,
            columnNumber: 11
        }, this);
        $[54] = t32;
        $[55] = t33;
    } else {
        t33 = $[55];
    }
    let t34;
    if ($[56] === Symbol.for("react.memo_cache_sentinel")) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "detail-label",
            children: "Level"
        }, void 0, false, {
            fileName: "[project]/components/Register/Step4.tsx",
            lineNumber: 336,
            columnNumber: 11
        }, this);
        $[56] = t34;
    } else {
        t34 = $[56];
    }
    const t35 = formData.level || "\u2014";
    let t36;
    if ($[57] !== t35) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "detail-row",
            children: [
                t34,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "detail-value",
                    children: t35
                }, void 0, false, {
                    fileName: "[project]/components/Register/Step4.tsx",
                    lineNumber: 344,
                    columnNumber: 44
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Register/Step4.tsx",
            lineNumber: 344,
            columnNumber: 11
        }, this);
        $[57] = t35;
        $[58] = t36;
    } else {
        t36 = $[58];
    }
    let t37;
    if ($[59] === Symbol.for("react.memo_cache_sentinel")) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "detail-label",
            children: "Availability"
        }, void 0, false, {
            fileName: "[project]/components/Register/Step4.tsx",
            lineNumber: 352,
            columnNumber: 11
        }, this);
        $[59] = t37;
    } else {
        t37 = $[59];
    }
    const t38 = formData.availability || "\u2014";
    let t39;
    if ($[60] !== t38) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "detail-row",
            children: [
                t37,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "detail-value",
                    children: t38
                }, void 0, false, {
                    fileName: "[project]/components/Register/Step4.tsx",
                    lineNumber: 360,
                    columnNumber: 44
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Register/Step4.tsx",
            lineNumber: 360,
            columnNumber: 11
        }, this);
        $[60] = t38;
        $[61] = t39;
    } else {
        t39 = $[61];
    }
    let t40;
    if ($[62] === Symbol.for("react.memo_cache_sentinel")) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "detail-label",
            children: "Preferences"
        }, void 0, false, {
            fileName: "[project]/components/Register/Step4.tsx",
            lineNumber: 368,
            columnNumber: 11
        }, this);
        $[62] = t40;
    } else {
        t40 = $[62];
    }
    let t41;
    if ($[63] !== formData.internshipPreferences) {
        t41 = formData.internshipPreferences.filter(_Step4FormDataInternshipPreferencesFilter).join(", ") || "\u2014";
        $[63] = formData.internshipPreferences;
        $[64] = t41;
    } else {
        t41 = $[64];
    }
    let t42;
    if ($[65] !== t41) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "detail-row",
            children: [
                t40,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "detail-value",
                    children: t41
                }, void 0, false, {
                    fileName: "[project]/components/Register/Step4.tsx",
                    lineNumber: 383,
                    columnNumber: 44
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Register/Step4.tsx",
            lineNumber: 383,
            columnNumber: 11
        }, this);
        $[65] = t41;
        $[66] = t42;
    } else {
        t42 = $[66];
    }
    let t43;
    if ($[67] !== t28 || $[68] !== t30 || $[69] !== t33 || $[70] !== t36 || $[71] !== t39 || $[72] !== t42) {
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "profile-details",
            children: [
                t25,
                t28,
                t30,
                t33,
                t36,
                t39,
                t42
            ]
        }, void 0, true, {
            fileName: "[project]/components/Register/Step4.tsx",
            lineNumber: 391,
            columnNumber: 11
        }, this);
        $[67] = t28;
        $[68] = t30;
        $[69] = t33;
        $[70] = t36;
        $[71] = t39;
        $[72] = t42;
        $[73] = t43;
    } else {
        t43 = $[73];
    }
    let t44;
    if ($[74] !== t24 || $[75] !== t43) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "profile-preview",
            children: [
                t24,
                t43
            ]
        }, void 0, true, {
            fileName: "[project]/components/Register/Step4.tsx",
            lineNumber: 404,
            columnNumber: 11
        }, this);
        $[74] = t24;
        $[75] = t43;
        $[76] = t44;
    } else {
        t44 = $[76];
    }
    let t45;
    if ($[77] !== error) {
        t45 = error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "register-error",
            children: error
        }, void 0, false, {
            fileName: "[project]/components/Register/Step4.tsx",
            lineNumber: 413,
            columnNumber: 20
        }, this);
        $[77] = error;
        $[78] = t45;
    } else {
        t45 = $[78];
    }
    let t46;
    if ($[79] !== success) {
        t46 = success && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "register-success",
            children: success
        }, void 0, false, {
            fileName: "[project]/components/Register/Step4.tsx",
            lineNumber: 421,
            columnNumber: 22
        }, this);
        $[79] = success;
        $[80] = t46;
    } else {
        t46 = $[80];
    }
    let t47;
    if ($[81] !== router) {
        t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            className: "btn-back",
            onClick: {
                "Step4[<button>.onClick]": ()=>router.push("/register/step3")
            }["Step4[<button>.onClick]"],
            children: "Back"
        }, void 0, false, {
            fileName: "[project]/components/Register/Step4.tsx",
            lineNumber: 429,
            columnNumber: 11
        }, this);
        $[81] = router;
        $[82] = t47;
    } else {
        t47 = $[82];
    }
    let t48;
    if ($[83] === Symbol.for("react.memo_cache_sentinel")) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "submit",
            className: "btn-submit",
            children: "Complete registration"
        }, void 0, false, {
            fileName: "[project]/components/Register/Step4.tsx",
            lineNumber: 439,
            columnNumber: 11
        }, this);
        $[83] = t48;
    } else {
        t48 = $[83];
    }
    let t49;
    if ($[84] !== t47) {
        t49 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "form-actions",
            children: [
                t47,
                t48
            ]
        }, void 0, true, {
            fileName: "[project]/components/Register/Step4.tsx",
            lineNumber: 446,
            columnNumber: 11
        }, this);
        $[84] = t47;
        $[85] = t49;
    } else {
        t49 = $[85];
    }
    let t50;
    if ($[86] !== handleSubmit || $[87] !== t44 || $[88] !== t45 || $[89] !== t46 || $[90] !== t49) {
        t50 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "register-card",
            children: [
                t7,
                t12,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "register-form-content",
                    children: [
                        t13,
                        t14,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSubmit,
                            children: [
                                t44,
                                t45,
                                t46,
                                t49
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Register/Step4.tsx",
                            lineNumber: 454,
                            columnNumber: 100
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Register/Step4.tsx",
                    lineNumber: 454,
                    columnNumber: 51
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Register/Step4.tsx",
            lineNumber: 454,
            columnNumber: 11
        }, this);
        $[86] = handleSubmit;
        $[87] = t44;
        $[88] = t45;
        $[89] = t46;
        $[90] = t49;
        $[91] = t50;
    } else {
        t50 = $[91];
    }
    let t51;
    if ($[92] !== t5 || $[93] !== t50) {
        t51 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "register-wrapper",
            children: [
                t5,
                t50
            ]
        }, void 0, true, {
            fileName: "[project]/components/Register/Step4.tsx",
            lineNumber: 466,
            columnNumber: 11
        }, this);
        $[92] = t5;
        $[93] = t50;
        $[94] = t51;
    } else {
        t51 = $[94];
    }
    return t51;
}
_s(Step4, "8GPcSfv/7u4WdVLqk+oERlRSsLs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Step4;
function _Step4FormDataInternshipPreferencesFilter(p) {
    return p;
}
const __TURBOPACK__default__export__ = Step4;
var _c;
__turbopack_context__.k.register(_c, "Step4");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_Register_Step4_tsx_3c19d2fa._.js.map