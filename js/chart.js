/**
 * Created by apple on 15/3/10.
*/
var strategy_profit = new Array(
    {time: "2014-0", profit: 1.966,sum:1.966,hot:6},{time: "2014-1", profit: -0.241,sum:1.725,hot:7},{time: "2014-2", profit: 2.136,sum:3.861,hot:6},{time: "2014-3", profit: -0.284,sum:3.577,hot:7},{time: "2014-4", profit: 0.712,sum:4.289,hot:9},{time: "2014-5", profit: 0.516,sum:4.805,hot:4},{time: "2014-6", profit: 0.682,sum:5.487,hot:3},{time: "2014-7", profit: 0.801,sum:6.288,hot:1},{time: "2014-8", profit: 1.707,sum:7.995,hot:10},{time: "2014-9", profit: 0.82,sum:8.815,hot:10},{time: "2014-10", profit: 0.021,sum:8.836,hot:2},{time: "2014-11", profit: 0.52,sum:9.356,hot:8},{time: "2014-12", profit: 2.192,sum:11.548,hot:9},{time: "2014-13", profit: 0.43,sum:11.978,hot:3},{time: "2014-14", profit: 0.939,sum:12.917,hot:2},{time: "2014-15", profit: 0.401,sum:13.318,hot:5},{time: "2014-16", profit: 2.217,sum:15.535,hot:5},{time: "2014-17", profit: 1.298,sum:16.833,hot:2},{time: "2014-18", profit: -0.158,sum:16.675,hot:6},{time: "2014-19", profit: 1.279,sum:17.954,hot:8},{time: "2014-20", profit: 1.437,sum:19.391,hot:0},{time: "2014-21", profit: -0.467,sum:18.924,hot:4},{time: "2014-22", profit: -0.239,sum:18.685,hot:0},{time: "2014-23", profit: 2.433,sum:21.118,hot:6},{time: "2014-24", profit: -0.427,sum:20.691,hot:7},{time: "2014-25", profit: -0.446,sum:20.245,hot:3},{time: "2014-26", profit: 0.556,sum:20.801,hot:3},{time: "2014-27", profit: 0.084,sum:20.885,hot:9},{time: "2014-28", profit: 0.217,sum:21.102,hot:6},{time: "2014-29", profit: -0.362,sum:20.740,hot:9},{time: "2014-30", profit: 1.649,sum:22.389,hot:9},{time: "2014-31", profit: 0.58,sum:22.969,hot:7},{time: "2014-32", profit: 0.032,sum:23.001,hot:5},{time: "2014-33", profit: 1.809,sum:24.810,hot:0},{time: "2014-34", profit: 1.486,sum:26.296,hot:7},{time: "2014-35", profit: -0.29,sum:26.006,hot:2},{time: "2014-36", profit: 0.433,sum:26.439,hot:1},{time: "2014-37", profit: 0.211,sum:26.650,hot:5},{time: "2014-38", profit: -0.144,sum:26.506,hot:1},{time: "2014-39", profit: 1.56,sum:28.066,hot:2},{time: "2014-40", profit: -0.473,sum:27.593,hot:3},{time: "2014-41", profit: -0.351,sum:27.242,hot:4},{time: "2014-42", profit: 0.406,sum:27.648,hot:10},{time: "2014-43", profit: 2.257,sum:29.905,hot:3},{time: "2014-44", profit: 2.431,sum:32.336,hot:4},{time: "2014-45", profit: 1.997,sum:34.333,hot:7},{time: "2014-46", profit: 0.93,sum:35.263,hot:0},{time: "2014-47", profit: 0.712,sum:35.975,hot:9},{time: "2014-48", profit: 1.1,sum:37.075,hot:3},{time: "2014-49", profit: 1.513,sum:38.588,hot:3},{time: "2014-50", profit: -0.49,sum:38.098,hot:7},{time: "2014-51", profit: 1.223,sum:39.321,hot:7},{time: "2014-52", profit: 1.444,sum:40.765,hot:4},{time: "2014-53", profit: -0.057,sum:40.708,hot:5},{time: "2014-54", profit: 0.176,sum:40.884,hot:10},{time: "2014-55", profit: 1.414,sum:42.298,hot:3},{time: "2014-56", profit: -0.158,sum:42.140,hot:3},{time: "2014-57", profit: 2.455,sum:44.595,hot:5},{time: "2014-58", profit: 1.527,sum:46.122,hot:8},{time: "2014-59", profit: 2.478,sum:48.600,hot:1},{time: "2014-60", profit: 2.119,sum:50.719,hot:3},{time: "2014-61", profit: 0.067,sum:50.786,hot:2},{time: "2014-62", profit: 1.682,sum:52.468,hot:7},{time: "2014-63", profit: 2.184,sum:54.652,hot:3},{time: "2014-64", profit: 0.686,sum:55.338,hot:6},{time: "2014-65", profit: 2.241,sum:57.579,hot:5},{time: "2014-66", profit: 0.008,sum:57.587,hot:7},{time: "2014-67", profit: 1.388,sum:58.975,hot:2},{time: "2014-68", profit: -0.163,sum:58.812,hot:1},{time: "2014-69", profit: -0.273,sum:58.539,hot:3},{time: "2014-70", profit: 0.308,sum:58.847,hot:7},{time: "2014-71", profit: 2.074,sum:60.921,hot:3},{time: "2014-72", profit: 0.116,sum:61.037,hot:3},{time: "2014-73", profit: -0.426,sum:60.611,hot:1},{time: "2014-74", profit: 1.555,sum:62.166,hot:7},{time: "2014-75", profit: 0.079,sum:62.245,hot:2},{time: "2014-76", profit: 1.282,sum:63.527,hot:7},{time: "2014-77", profit: 0.441,sum:63.968,hot:0},{time: "2014-78", profit: -0.214,sum:63.754,hot:8},{time: "2014-79", profit: 0.728,sum:64.482,hot:0},{time: "2014-80", profit: 1.646,sum:66.128,hot:3},{time: "2014-81", profit: 1.996,sum:68.124,hot:3},{time: "2014-82", profit: 1.508,sum:69.632,hot:9},{time: "2014-83", profit: -0.436,sum:69.196,hot:3},{time: "2014-84", profit: 1.464,sum:70.660,hot:9},{time: "2014-85", profit: 0.204,sum:70.864,hot:1},{time: "2014-86", profit: 0.806,sum:71.670,hot:3},{time: "2014-87", profit: 0.214,sum:71.884,hot:2},{time: "2014-88", profit: 0.632,sum:72.516,hot:6},{time: "2014-89", profit: 1.784,sum:74.300,hot:5},{time: "2014-90", profit: 0.357,sum:74.657,hot:5},{time: "2014-91", profit: 1.244,sum:75.901,hot:1},{time: "2014-92", profit: 0.159,sum:76.060,hot:9},{time: "2014-93", profit: -0.04,sum:76.020,hot:7},{time: "2014-94", profit: 1.764,sum:77.784,hot:3},{time: "2014-95", profit: 1.493,sum:79.277,hot:3},{time: "2014-96", profit: 0.76,sum:80.037,hot:4},{time: "2014-97", profit: 0.865,sum:80.902,hot:3},{time: "2014-98", profit: 1.907,sum:82.809,hot:8},{time: "2014-99", profit: 2.003,sum:84.812,hot:3},{time: "2014-100", profit: 0.465,sum:85.277,hot:8},{time: "2014-101", profit: -0.325,sum:84.952,hot:6},{time: "2014-102", profit: 1.538,sum:86.490,hot:10},{time: "2014-103", profit: 1.137,sum:87.627,hot:9},{time: "2014-104", profit: 2.292,sum:89.919,hot:7},{time: "2014-105", profit: 0.574,sum:90.493,hot:3},{time: "2014-106", profit: 0.96,sum:91.453,hot:4},{time: "2014-107", profit: 0.887,sum:92.340,hot:0},{time: "2014-108", profit: 1.941,sum:94.281,hot:7},{time: "2014-109", profit: 2.162,sum:96.443,hot:4},{time: "2014-110", profit: 0.45,sum:96.893,hot:10},{time: "2014-111", profit: 0.667,sum:97.560,hot:3},{time: "2014-112", profit: 1.892,sum:99.452,hot:1},{time: "2014-113", profit: 1.792,sum:101.244,hot:9},{time: "2014-114", profit: 2.03,sum:103.274,hot:2},{time: "2014-115", profit: 0.124,sum:103.398,hot:6},{time: "2014-116", profit: 1.524,sum:104.922,hot:10},{time: "2014-117", profit: 1.608,sum:106.530,hot:9},{time: "2014-118", profit: 2.307,sum:108.837,hot:2},{time: "2014-119", profit: -0.393,sum:108.444,hot:4},{time: "2014-120", profit: -0.373,sum:108.071,hot:5},{time: "2014-121", profit: 1.773,sum:109.844,hot:2},{time: "2014-122", profit: 0.371,sum:110.215,hot:4},{time: "2014-123", profit: 1.943,sum:112.158,hot:10},{time: "2014-124", profit: 1.193,sum:113.351,hot:2},{time: "2014-125", profit: 0.459,sum:113.810,hot:9},{time: "2014-126", profit: 0.167,sum:113.977,hot:3},{time: "2014-127", profit: 1.141,sum:115.118,hot:1},{time: "2014-128", profit: 0.47,sum:115.588,hot:4},{time: "2014-129", profit: 1.701,sum:117.289,hot:9},{time: "2014-130", profit: 1.329,sum:118.618,hot:9},{time: "2014-131", profit: 0.454,sum:119.072,hot:7},{time: "2014-132", profit: 1.077,sum:120.149,hot:6},{time: "2014-133", profit: 0.109,sum:120.258,hot:10},{time: "2014-134", profit: 1.218,sum:121.476,hot:3},{time: "2014-135", profit: -0.033,sum:121.443,hot:4},{time: "2014-136", profit: 1.38,sum:122.823,hot:9},{time: "2014-137", profit: 0.794,sum:123.617,hot:0},{time: "2014-138", profit: 1.784,sum:125.401,hot:10},{time: "2014-139", profit: 1.576,sum:126.977,hot:3},{time: "2014-140", profit: 2.471,sum:129.448,hot:9},{time: "2014-141", profit: 1.545,sum:130.993,hot:5},{time: "2014-142", profit: -0.077,sum:130.916,hot:5},{time: "2014-143", profit: 0.717,sum:131.633,hot:5},{time: "2014-144", profit: 0.802,sum:132.435,hot:9},{time: "2014-145", profit: 1.481,sum:133.916,hot:10},{time: "2014-146", profit: 2.221,sum:136.137,hot:6},{time: "2014-147", profit: -0.269,sum:135.868,hot:4},{time: "2014-148", profit: 0.964,sum:136.832,hot:0},{time: "2014-149", profit: 1.892,sum:138.724,hot:4},{time: "2014-150", profit: 1.319,sum:140.043,hot:4},{time: "2014-151", profit: 2.061,sum:142.104,hot:2},{time: "2014-152", profit: 2.162,sum:144.266,hot:2},{time: "2014-153", profit: -0.018,sum:144.248,hot:1},{time: "2014-154", profit: 1.67,sum:145.918,hot:5},{time: "2014-155", profit: -0.184,sum:145.734,hot:8},{time: "2014-156", profit: 1.636,sum:147.370,hot:9},{time: "2014-157", profit: 0.533,sum:147.903,hot:8},{time: "2014-158", profit: 2.117,sum:150.020,hot:3},{time: "2014-159", profit: 2.354,sum:152.374,hot:0},{time: "2014-160", profit: 1.697,sum:154.071,hot:8},{time: "2014-161", profit: 0.318,sum:154.389,hot:10},{time: "2014-162", profit: 0.563,sum:154.952,hot:9},{time: "2014-163", profit: -0.318,sum:154.634,hot:4},{time: "2014-164", profit: 2.034,sum:156.668,hot:1},{time: "2014-165", profit: 2.213,sum:158.881,hot:10},{time: "2014-166", profit: -0.003,sum:158.878,hot:3},{time: "2014-167", profit: 2.436,sum:161.314,hot:2},{time: "2014-168", profit: -0.315,sum:160.999,hot:3},{time: "2014-169", profit: 0.564,sum:161.563,hot:8},{time: "2014-170", profit: 1.258,sum:162.821,hot:0},{time: "2014-171", profit: 2.1,sum:164.921,hot:5},{time: "2014-172", profit: 0.373,sum:165.294,hot:2},{time: "2014-173", profit: 2.327,sum:167.621,hot:5},{time: "2014-174", profit: 0.249,sum:167.870,hot:10},{time: "2014-175", profit: -0.039,sum:167.831,hot:0},{time: "2014-176", profit: -0.069,sum:167.762,hot:0},{time: "2014-177", profit: -0.107,sum:167.655,hot:5},{time: "2014-178", profit: -0.241,sum:167.414,hot:7},{time: "2014-179", profit: -0.03,sum:167.384,hot:4},{time: "2014-180", profit: 0.195,sum:167.579,hot:9},{time: "2014-181", profit: 0.297,sum:167.876,hot:3},{time: "2014-182", profit: 1.639,sum:169.515,hot:3},{time: "2014-183", profit: 0.347,sum:169.862,hot:7},{time: "2014-184", profit: 2.068,sum:171.930,hot:1},{time: "2014-185", profit: 0.709,sum:172.639,hot:8},{time: "2014-186", profit: 1.899,sum:174.538,hot:8},{time: "2014-187", profit: 2.241,sum:176.779,hot:7},{time: "2014-188", profit: 1.404,sum:178.183,hot:6},{time: "2014-189", profit: 0.722,sum:178.905,hot:6},{time: "2014-190", profit: 1.158,sum:180.063,hot:4},{time: "2014-191", profit: 1.235,sum:181.298,hot:5},{time: "2014-192", profit: 1.023,sum:182.321,hot:7},{time: "2014-193", profit: 1.926,sum:184.247,hot:4},{time: "2014-194", profit: 2.007,sum:186.254,hot:8},{time: "2014-195", profit: 0.801,sum:187.055,hot:3},{time: "2014-196", profit: 1.422,sum:188.477,hot:9},{time: "2014-197", profit: 1.735,sum:190.212,hot:8},{time: "2014-198", profit: 1.051,sum:191.263,hot:6},{time: "2014-199", profit: 1.05,sum:192.313,hot:0},{time: "2014-200", profit: -0.284,sum:192.029,hot:1},{time: "2014-201", profit: 1.187,sum:193.216,hot:1},{time: "2014-202", profit: 0.821,sum:194.037,hot:5},{time: "2014-203", profit: 1.307,sum:195.344,hot:1},{time: "2014-204", profit: 0.902,sum:196.246,hot:2},{time: "2014-205", profit: 0.727,sum:196.973,hot:8},{time: "2014-206", profit: 2.253,sum:199.226,hot:1},{time: "2014-207", profit: 2.039,sum:201.265,hot:3},{time: "2014-208", profit: -0.162,sum:201.103,hot:0},{time: "2014-209", profit: 0.579,sum:201.682,hot:4},{time: "2014-210", profit: 2.185,sum:203.867,hot:3},{time: "2014-211", profit: 1.705,sum:205.572,hot:4},{time: "2014-212", profit: 0.203,sum:205.775,hot:8},{time: "2014-213", profit: 0.374,sum:206.149,hot:3},{time: "2014-214", profit: 2.147,sum:208.296,hot:7},{time: "2014-215", profit: -0.108,sum:208.188,hot:5},{time: "2014-216", profit: 2.275,sum:210.463,hot:6},{time: "2014-217", profit: 2.141,sum:212.604,hot:5},{time: "2014-218", profit: 0.768,sum:213.372,hot:2},{time: "2014-219", profit: 0.926,sum:214.298,hot:6},{time: "2014-220", profit: 0.605,sum:214.903,hot:6},{time: "2014-221", profit: 1.637,sum:216.540,hot:4},{time: "2014-222", profit: 0.271,sum:216.811,hot:4},{time: "2014-223", profit: 0.819,sum:217.630,hot:9},{time: "2014-224", profit: 1.521,sum:219.151,hot:10},{time: "2014-225", profit: 1.217,sum:220.368,hot:7},{time: "2014-226", profit: 0.868,sum:221.236,hot:7},{time: "2014-227", profit: 0.987,sum:222.223,hot:3},{time: "2014-228", profit: 0.94,sum:223.163,hot:7},{time: "2014-229", profit: 1.172,sum:224.335,hot:3},{time: "2014-230", profit: 1.386,sum:225.721,hot:5},{time: "2014-231", profit: -0.315,sum:225.406,hot:3},{time: "2014-232", profit: 1.159,sum:226.565,hot:6},{time: "2014-233", profit: 1.459,sum:228.024,hot:6},{time: "2014-234", profit: 2.024,sum:230.048,hot:1},{time: "2014-235", profit: -0.495,sum:229.553,hot:4},{time: "2014-236", profit: 2.13,sum:231.683,hot:10},{time: "2014-237", profit: 2.311,sum:233.994,hot:9},{time: "2014-238", profit: 0.033,sum:234.027,hot:9},{time: "2014-239", profit: 0.574,sum:234.601,hot:8},{time: "2014-240", profit: 0.244,sum:234.845,hot:7},{time: "2014-241", profit: 1.021,sum:235.866,hot:5},{time: "2014-242", profit: 1.99,sum:237.856,hot:5},{time: "2014-243", profit: 0.338,sum:238.194,hot:6},{time: "2014-244", profit: -0.197,sum:237.997,hot:4},{time: "2014-245", profit: 1.548,sum:239.545,hot:7},{time: "2014-246", profit: 0.485,sum:240.030,hot:9},{time: "2014-247", profit: -0.112,sum:239.918,hot:6},{time: "2014-248", profit: 0.157,sum:240.075,hot:9},{time: "2014-249", profit: 2.255,sum:242.330,hot:8},{time: "2014-250", profit: 2.326,sum:244.656,hot:7},{time: "2014-251", profit: 1.864,sum:246.520,hot:6},{time: "2014-252", profit: -0.017,sum:246.503,hot:7},{time: "2014-253", profit: 0.205,sum:246.708,hot:8},{time: "2014-254", profit: 0.73,sum:247.438,hot:9},{time: "2014-255", profit: -0.142,sum:247.296,hot:2},{time: "2014-256", profit: 1.288,sum:248.584,hot:6},{time: "2014-257", profit: 1.956,sum:250.540,hot:8},{time: "2014-258", profit: -0.371,sum:250.169,hot:8},{time: "2014-259", profit: 1.12,sum:251.289,hot:8},{time: "2014-260", profit: 0.523,sum:251.812,hot:7},{time: "2014-261", profit: 1.704,sum:253.516,hot:2},{time: "2014-262", profit: 1.887,sum:255.403,hot:1},{time: "2014-263", profit: 1.065,sum:256.468,hot:8},{time: "2014-264", profit: 1.603,sum:258.071,hot:1},{time: "2014-265", profit: 0.953,sum:259.024,hot:7},{time: "2014-266", profit: 0.166,sum:259.190,hot:6},{time: "2014-267", profit: 1.795,sum:260.985,hot:7},{time: "2014-268", profit: 1.77,sum:262.755,hot:7},{time: "2014-269", profit: 0.617,sum:263.372,hot:0},{time: "2014-270", profit: 0.198,sum:263.570,hot:9},{time: "2014-271", profit: 1.336,sum:264.906,hot:6},{time: "2014-272", profit: 0.944,sum:265.850,hot:5},{time: "2014-273", profit: 0.6,sum:266.450,hot:4},{time: "2014-274", profit: 0.445,sum:266.895,hot:6},{time: "2014-275", profit: -0.181,sum:266.714,hot:1},{time: "2014-276", profit: -0.355,sum:266.359,hot:7},{time: "2014-277", profit: 0.428,sum:266.787,hot:5},{time: "2014-278", profit: 0.486,sum:267.273,hot:5},{time: "2014-279", profit: 2.148,sum:269.421,hot:6},{time: "2014-280", profit: 0.634,sum:270.055,hot:2},{time: "2014-281", profit: 2.475,sum:272.530,hot:8},{time: "2014-282", profit: -0.025,sum:272.505,hot:3},{time: "2014-283", profit: 2.031,sum:274.536,hot:4},{time: "2014-284", profit: 2.111,sum:276.647,hot:3},{time: "2014-285", profit: 1.67,sum:278.317,hot:8},{time: "2014-286", profit: 0.725,sum:279.042,hot:8},{time: "2014-287", profit: 0.371,sum:279.413,hot:3},{time: "2014-288", profit: 0.734,sum:280.147,hot:0},{time: "2014-289", profit: 1.32,sum:281.467,hot:0},{time: "2014-290", profit: 2.246,sum:283.713,hot:9},{time: "2014-291", profit: 2.164,sum:285.877,hot:7},{time: "2014-292", profit: -0.276,sum:285.601,hot:9},{time: "2014-293", profit: 1.88,sum:287.481,hot:3},{time: "2014-294", profit: 0.123,sum:287.604,hot:4},{time: "2014-295", profit: 0.992,sum:288.596,hot:6},{time: "2014-296", profit: 1.011,sum:289.607,hot:0},{time: "2014-297", profit: 1.042,sum:290.649,hot:7},{time: "2014-298", profit: -0.303,sum:290.346,hot:5},{time: "2014-299", profit: 1.141,sum:291.487,hot:6},{time: "2014-300", profit: 1.742,sum:293.229,hot:5},{time: "2014-301", profit: 1.527,sum:294.756,hot:4},{time: "2014-302", profit: -0.144,sum:294.612,hot:9},{time: "2014-303", profit: 0.165,sum:294.777,hot:2},{time: "2014-304", profit: 0.468,sum:295.245,hot:1},{time: "2014-305", profit: 0.313,sum:295.558,hot:8},{time: "2014-306", profit: 2.188,sum:297.746,hot:9},{time: "2014-307", profit: 0.414,sum:298.160,hot:2},{time: "2014-308", profit: 0.97,sum:299.130,hot:3},{time: "2014-309", profit: 1.86,sum:300.990,hot:0},{time: "2014-310", profit: 2.342,sum:303.332,hot:9},{time: "2014-311", profit: -0.287,sum:303.045,hot:7},{time: "2014-312", profit: 0.018,sum:303.063,hot:1},{time: "2014-313", profit: 0.072,sum:303.135,hot:8},{time: "2014-314", profit: 1.247,sum:304.382,hot:1},{time: "2014-315", profit: -0.163,sum:304.219,hot:7},{time: "2014-316", profit: 1.332,sum:305.551,hot:7},{time: "2014-317", profit: 2.333,sum:307.884,hot:8},{time: "2014-318", profit: 0.719,sum:308.603,hot:4},{time: "2014-319", profit: 0.934,sum:309.537,hot:3},{time: "2014-320", profit: 1.614,sum:311.151,hot:2},{time: "2014-321", profit: 1.991,sum:313.142,hot:7},{time: "2014-322", profit: 0.117,sum:313.259,hot:7},{time: "2014-323", profit: 2.313,sum:315.572,hot:3},{time: "2014-324", profit: -0.154,sum:315.418,hot:4},{time: "2014-325", profit: 0.05,sum:315.468,hot:0},{time: "2014-326", profit: 1.899,sum:317.367,hot:9},{time: "2014-327", profit: 1.332,sum:318.699,hot:1},{time: "2014-328", profit: 0.942,sum:319.641,hot:0},{time: "2014-329", profit: 0.685,sum:320.326,hot:5},{time: "2014-330", profit: 0.359,sum:320.685,hot:7},{time: "2014-331", profit: 1.2,sum:321.885,hot:1},{time: "2014-332", profit: 1.485,sum:323.370,hot:4},{time: "2014-333", profit: 0.389,sum:323.759,hot:10},{time: "2014-334", profit: 1.356,sum:325.115,hot:6},{time: "2014-335", profit: 0.634,sum:325.749,hot:3},{time: "2014-336", profit: 1.496,sum:327.245,hot:7},{time: "2014-337", profit: 0.236,sum:327.481,hot:8},{time: "2014-338", profit: 1.549,sum:329.030,hot:3},{time: "2014-339", profit: 2.215,sum:331.245,hot:3},{time: "2014-340", profit: 2.112,sum:333.357,hot:5},{time: "2014-341", profit: 0.745,sum:334.102,hot:3},{time: "2014-342", profit: -0.458,sum:333.644,hot:8},{time: "2014-343", profit: 2.205,sum:335.849,hot:2},{time: "2014-344", profit: 0.614,sum:336.463,hot:3},{time: "2014-345", profit: 2.319,sum:338.782,hot:9},{time: "2014-346", profit: 2.32,sum:341.102,hot:1},{time: "2014-347", profit: 0.327,sum:341.429,hot:7},{time: "2014-348", profit: 1.452,sum:342.881,hot:10},{time: "2014-349", profit: 0.056,sum:342.937,hot:4},{time: "2014-350", profit: 0.568,sum:343.505,hot:5},{time: "2014-351", profit: -0.275,sum:343.230,hot:10},{time: "2014-352", profit: 0.818,sum:344.048,hot:1},{time: "2014-353", profit: 0.995,sum:345.043,hot:6},{time: "2014-354", profit: 0.782,sum:345.825,hot:0},{time: "2014-355", profit: 0.873,sum:346.698,hot:4},{time: "2014-356", profit: 0.819,sum:347.517,hot:3},{time: "2014-357", profit: 0.553,sum:348.070,hot:10},{time: "2014-358", profit: 0.552,sum:348.622,hot:1},{time: "2014-359", profit: -0.256,sum:348.366,hot:1},{time: "2014-360", profit: 1.532,sum:349.898,hot:3},{time: "2014-361", profit: 1.947,sum:351.845,hot:6},{time: "2014-362", profit: 2.085,sum:353.930,hot:3},{time: "2014-363", profit: 0.892,sum:354.822,hot:0},
    {time: "2014-364", profit: 1.032,sum:355.854,hot:6}
);
var market_profit=new Array(
    {time: "2014-0", profit: -0.702,sum:-0.702},{time: "2014-1", profit: 0.712,sum:0.010},{time: "2014-2", profit: -0.28,sum:-0.270},{time: "2014-3", profit: -0.108,sum:-0.378},{time: "2014-4", profit: -1.084,sum:-1.462},{time: "2014-5", profit: -0.318,sum:-1.780},{time: "2014-6", profit: 0.753,sum:-1.027},{time: "2014-7", profit: 1.005,sum:-0.022},{time: "2014-8", profit: 0.102,sum:0.080},{time: "2014-9", profit: 1.245,sum:1.325},{time: "2014-10", profit: 0.026,sum:1.351},{time: "2014-11", profit: -1.169,sum:0.182},{time: "2014-12", profit: 0.518,sum:0.700},{time: "2014-13", profit: -0.211,sum:0.489},{time: "2014-14", profit: 0.654,sum:1.143},{time: "2014-15", profit: 0.553,sum:1.696},{time: "2014-16", profit: -1.067,sum:0.629},{time: "2014-17", profit: -0.064,sum:0.565},{time: "2014-18", profit: -0.719,sum:-0.154},{time: "2014-19", profit: -0.049,sum:-0.203},{time: "2014-20", profit: 1.222,sum:1.019},{time: "2014-21", profit: 1.586,sum:2.605},{time: "2014-22", profit: 0.998,sum:3.603},{time: "2014-23", profit: -0.145,sum:3.458},{time: "2014-24", profit: 1.227,sum:4.685},{time: "2014-25", profit: -0.601,sum:4.084},{time: "2014-26", profit: 0.123,sum:4.207},{time: "2014-27", profit: 0.643,sum:4.850},{time: "2014-28", profit: -0.861,sum:3.989},{time: "2014-29", profit: 1.285,sum:5.274},{time: "2014-30", profit: 0.647,sum:5.921},{time: "2014-31", profit: -1.147,sum:4.774},{time: "2014-32", profit: 1.132,sum:5.906},{time: "2014-33", profit: 1.667,sum:7.573},{time: "2014-34", profit: 1.127,sum:8.700},{time: "2014-35", profit: -0.061,sum:8.639},{time: "2014-36", profit: -0.36,sum:8.279},{time: "2014-37", profit: -0.156,sum:8.123},{time: "2014-38", profit: 0.954,sum:9.077},{time: "2014-39", profit: 0.143,sum:9.220},{time: "2014-40", profit: -0.977,sum:8.243},{time: "2014-41", profit: 0.742,sum:8.985},{time: "2014-42", profit: 0.242,sum:9.227},{time: "2014-43", profit: -0.776,sum:8.451},{time: "2014-44", profit: 1.376,sum:9.827},{time: "2014-45", profit: -0.239,sum:9.588},{time: "2014-46", profit: -0.003,sum:9.585},{time: "2014-47", profit: -0.467,sum:9.118},{time: "2014-48", profit: -0.097,sum:9.021},{time: "2014-49", profit: 1.193,sum:10.214},{time: "2014-50", profit: 0.896,sum:11.110},{time: "2014-51", profit: -0.487,sum:10.623},{time: "2014-52", profit: 1.55,sum:12.173},{time: "2014-53", profit: 0.887,sum:13.060},{time: "2014-54", profit: 1.715,sum:14.775},{time: "2014-55", profit: 0.257,sum:15.032},{time: "2014-56", profit: 0.639,sum:15.671},{time: "2014-57", profit: 1.456,sum:17.127},{time: "2014-58", profit: 0.417,sum:17.544},{time: "2014-59", profit: 0.163,sum:17.707},{time: "2014-60", profit: 1.785,sum:19.492},{time: "2014-61", profit: 0.318,sum:19.810},{time: "2014-62", profit: -1.034,sum:18.776},{time: "2014-63", profit: -0.912,sum:17.864},{time: "2014-64", profit: 1.737,sum:19.601},{time: "2014-65", profit: 1.274,sum:20.875},{time: "2014-66", profit: 1.17,sum:22.045},{time: "2014-67", profit: 1.632,sum:23.677},{time: "2014-68", profit: -0.325,sum:23.352},{time: "2014-69", profit: -0.823,sum:22.529},{time: "2014-70", profit: 1.275,sum:23.804},{time: "2014-71", profit: 1.336,sum:25.140},{time: "2014-72", profit: -0.882,sum:24.258},{time: "2014-73", profit: 0.445,sum:24.703},{time: "2014-74", profit: 1.542,sum:26.245},{time: "2014-75", profit: 0.651,sum:26.896},{time: "2014-76", profit: -0.161,sum:26.735},{time: "2014-77", profit: -1.184,sum:25.551},{time: "2014-78", profit: 1.788,sum:27.339},{time: "2014-79", profit: -0.53,sum:26.809},{time: "2014-80", profit: -0.902,sum:25.907},{time: "2014-81", profit: -1.189,sum:24.718},{time: "2014-82", profit: -0.312,sum:24.406},{time: "2014-83", profit: -0.081,sum:24.325},{time: "2014-84", profit: 1.067,sum:25.392},{time: "2014-85", profit: -0.243,sum:25.149},{time: "2014-86", profit: 0.707,sum:25.856},{time: "2014-87", profit: 0.851,sum:26.707},{time: "2014-88", profit: 1.537,sum:28.244},{time: "2014-89", profit: -0.837,sum:27.407},{time: "2014-90", profit: 1.656,sum:29.063},{time: "2014-91", profit: 1.184,sum:30.247},{time: "2014-92", profit: 0.893,sum:31.140},{time: "2014-93", profit: -0.586,sum:30.554},{time: "2014-94", profit: -0.777,sum:29.777},{time: "2014-95", profit: -1.184,sum:28.593},{time: "2014-96", profit: -1.15,sum:27.443},{time: "2014-97", profit: 0.484,sum:27.927},{time: "2014-98", profit: -0.68,sum:27.247},{time: "2014-99", profit: -0.673,sum:26.574},{time: "2014-100", profit: -0.334,sum:26.240},{time: "2014-101", profit: 0.4,sum:26.640},{time: "2014-102", profit: 1.716,sum:28.356},{time: "2014-103", profit: 1.103,sum:29.459},{time: "2014-104", profit: 0.353,sum:29.812},{time: "2014-105", profit: -0.301,sum:29.511},{time: "2014-106", profit: 1.233,sum:30.744},{time: "2014-107", profit: -1.193,sum:29.551},{time: "2014-108", profit: -1.034,sum:28.517},{time: "2014-109", profit: -0.034,sum:28.483},{time: "2014-110", profit: 1.743,sum:30.226},{time: "2014-111", profit: -0.654,sum:29.572},{time: "2014-112", profit: -0.861,sum:28.711},{time: "2014-113", profit: -0.117,sum:28.594},{time: "2014-114", profit: -0.69,sum:27.904},{time: "2014-115", profit: -0.41,sum:27.494},{time: "2014-116", profit: -1.067,sum:26.427},{time: "2014-117", profit: 0.876,sum:27.303},{time: "2014-118", profit: 0.083,sum:27.386},{time: "2014-119", profit: 1.146,sum:28.532},{time: "2014-120", profit: 0.446,sum:28.978},{time: "2014-121", profit: -0.431,sum:28.547},{time: "2014-122", profit: 0.993,sum:29.540},{time: "2014-123", profit: -0.594,sum:28.946},{time: "2014-124", profit: -0.15,sum:28.796},{time: "2014-125", profit: 0.77,sum:29.566},{time: "2014-126", profit: -1.142,sum:28.424},{time: "2014-127", profit: 0.93,sum:29.354},{time: "2014-128", profit: 0.225,sum:29.579},{time: "2014-129", profit: 1.611,sum:31.190},{time: "2014-130", profit: -0.73,sum:30.460},{time: "2014-131", profit: -0.026,sum:30.434},{time: "2014-132", profit: -0.94,sum:29.494},{time: "2014-133", profit: -1.187,sum:28.307},{time: "2014-134", profit: 0.498,sum:28.805},{time: "2014-135", profit: 0.62,sum:29.425},{time: "2014-136", profit: 1.36,sum:30.785},{time: "2014-137", profit: -0.244,sum:30.541},{time: "2014-138", profit: -0.282,sum:30.259},{time: "2014-139", profit: -0.467,sum:29.792},{time: "2014-140", profit: -0.956,sum:28.836},{time: "2014-141", profit: -0.822,sum:28.014},{time: "2014-142", profit: -0.924,sum:27.090},{time: "2014-143", profit: -0.184,sum:26.906},{time: "2014-144", profit: -0.243,sum:26.663},{time: "2014-145", profit: 0.869,sum:27.532},{time: "2014-146", profit: -0.556,sum:26.976},{time: "2014-147", profit: -0.187,sum:26.789},{time: "2014-148", profit: 1.252,sum:28.041},{time: "2014-149", profit: 0.673,sum:28.714},{time: "2014-150", profit: 0.273,sum:28.987},{time: "2014-151", profit: -0.993,sum:27.994},{time: "2014-152", profit: -0.754,sum:27.240},{time: "2014-153", profit: 0.47,sum:27.710},{time: "2014-154", profit: -0.417,sum:27.293},{time: "2014-155", profit: -0.711,sum:26.582},{time: "2014-156", profit: 0.009,sum:26.591},{time: "2014-157", profit: 1.554,sum:28.145},{time: "2014-158", profit: -0.997,sum:27.148},{time: "2014-159", profit: 0.034,sum:27.182},{time: "2014-160", profit: 1.009,sum:28.191},{time: "2014-161", profit: 1.023,sum:29.214},{time: "2014-162", profit: 1.733,sum:30.947},{time: "2014-163", profit: -0.651,sum:30.296},{time: "2014-164", profit: 0.583,sum:30.879},{time: "2014-165", profit: 1.327,sum:32.206},{time: "2014-166", profit: 0.453,sum:32.659},{time: "2014-167", profit: 0.802,sum:33.461},{time: "2014-168", profit: 1.001,sum:34.462},{time: "2014-169", profit: 1.143,sum:35.605},{time: "2014-170", profit: -0.506,sum:35.099},{time: "2014-171", profit: -0.267,sum:34.832},{time: "2014-172", profit: -0.75,sum:34.082},{time: "2014-173", profit: 0.094,sum:34.176},{time: "2014-174", profit: 0.077,sum:34.253},{time: "2014-175", profit: -0.033,sum:34.220},{time: "2014-176", profit: -0.449,sum:33.771},{time: "2014-177", profit: 1.652,sum:35.423},{time: "2014-178", profit: 0.976,sum:36.399},{time: "2014-179", profit: -0.649,sum:35.750},{time: "2014-180", profit: -1.073,sum:34.677},{time: "2014-181", profit: -0.263,sum:34.414},{time: "2014-182", profit: 0.799,sum:35.213},{time: "2014-183", profit: 1.104,sum:36.317},{time: "2014-184", profit: 1.113,sum:37.430},{time: "2014-185", profit: 0.156,sum:37.586},{time: "2014-186", profit: -1.053,sum:36.533},{time: "2014-187", profit: 1.349,sum:37.882},{time: "2014-188", profit: -0.279,sum:37.603},{time: "2014-189", profit: -0.002,sum:37.601},{time: "2014-190", profit: -0.558,sum:37.043},{time: "2014-191", profit: 0.58,sum:37.623},{time: "2014-192", profit: 0.878,sum:38.501},{time: "2014-193", profit: 0.573,sum:39.074},{time: "2014-194", profit: 0.999,sum:40.073},{time: "2014-195", profit: 1.038,sum:41.111},{time: "2014-196", profit: 0.462,sum:41.573},{time: "2014-197", profit: 1.246,sum:42.819},{time: "2014-198", profit: 1.171,sum:43.990},{time: "2014-199", profit: 1.124,sum:45.114},{time: "2014-200", profit: 0.692,sum:45.806},{time: "2014-201", profit: 1.788,sum:47.594},{time: "2014-202", profit: -1.113,sum:46.481},{time: "2014-203", profit: -0.956,sum:45.525},{time: "2014-204", profit: 0.057,sum:45.582},{time: "2014-205", profit: -0.503,sum:45.079},{time: "2014-206", profit: 1.451,sum:46.530},{time: "2014-207", profit: 0.834,sum:47.364},{time: "2014-208", profit: 1.49,sum:48.854},{time: "2014-209", profit: -0.648,sum:48.206},{time: "2014-210", profit: -0.077,sum:48.129},{time: "2014-211", profit: 1.793,sum:49.922},{time: "2014-212", profit: 0.251,sum:50.173},{time: "2014-213", profit: -1.032,sum:49.141},{time: "2014-214", profit: 1.793,sum:50.934},{time: "2014-215", profit: 1.112,sum:52.046},{time: "2014-216", profit: 1.215,sum:53.261},{time: "2014-217", profit: -1.09,sum:52.171},{time: "2014-218", profit: 1.087,sum:53.258},{time: "2014-219", profit: -0.801,sum:52.457},{time: "2014-220", profit: 0.123,sum:52.580},{time: "2014-221", profit: -0.763,sum:51.817},{time: "2014-222", profit: 0.319,sum:52.136},{time: "2014-223", profit: -0.247,sum:51.889},{time: "2014-224", profit: 0.912,sum:52.801},{time: "2014-225", profit: 1.787,sum:54.588},{time: "2014-226", profit: 0.232,sum:54.820},{time: "2014-227", profit: 0.164,sum:54.984},{time: "2014-228", profit: 0.396,sum:55.380},{time: "2014-229", profit: 1.79,sum:57.170},{time: "2014-230", profit: 0.899,sum:58.069},{time: "2014-231", profit: -0.802,sum:57.267},{time: "2014-232", profit: 1.462,sum:58.729},{time: "2014-233", profit: -1.109,sum:57.620},{time: "2014-234", profit: 1.539,sum:59.159},{time: "2014-235", profit: 0.254,sum:59.413},{time: "2014-236", profit: 0.399,sum:59.812},{time: "2014-237", profit: 0.521,sum:60.333},{time: "2014-238", profit: 1.396,sum:61.729},{time: "2014-239", profit: 0.665,sum:62.394},{time: "2014-240", profit: 1.172,sum:63.566},{time: "2014-241", profit: 0.881,sum:64.447},{time: "2014-242", profit: 0.109,sum:64.556},{time: "2014-243", profit: -0.334,sum:64.222},{time: "2014-244", profit: 1.262,sum:65.484},{time: "2014-245", profit: -0.523,sum:64.961},{time: "2014-246", profit: 0.274,sum:65.235},{time: "2014-247", profit: 0.66,sum:65.895},{time: "2014-248", profit: -0.847,sum:65.048},{time: "2014-249", profit: 1.254,sum:66.302},{time: "2014-250", profit: 0.349,sum:66.651},{time: "2014-251", profit: 1.345,sum:67.996},{time: "2014-252", profit: -0.325,sum:67.671},{time: "2014-253", profit: -0.1,sum:67.571},{time: "2014-254", profit: 1.595,sum:69.166},{time: "2014-255", profit: 1.112,sum:70.278},{time: "2014-256", profit: 1.225,sum:71.503},{time: "2014-257", profit: 0.792,sum:72.295},{time: "2014-258", profit: 0.525,sum:72.820},{time: "2014-259", profit: 0.871,sum:73.691},{time: "2014-260", profit: -0.715,sum:72.976},{time: "2014-261", profit: 1.377,sum:74.353},{time: "2014-262", profit: -0.82,sum:73.533},{time: "2014-263", profit: 0.098,sum:73.631},{time: "2014-264", profit: 1.781,sum:75.412},{time: "2014-265", profit: 0.544,sum:75.956},{time: "2014-266", profit: -0.348,sum:75.608},{time: "2014-267", profit: 1.473,sum:77.081},{time: "2014-268", profit: 1.582,sum:78.663},{time: "2014-269", profit: -0.374,sum:78.289},{time: "2014-270", profit: -0.56,sum:77.729},{time: "2014-271", profit: -0.074,sum:77.655},{time: "2014-272", profit: -0.175,sum:77.480},{time: "2014-273", profit: 0.257,sum:77.737},{time: "2014-274", profit: -0.404,sum:77.333},{time: "2014-275", profit: 1.29,sum:78.623},{time: "2014-276", profit: -1.161,sum:77.462},{time: "2014-277", profit: 0.243,sum:77.705},{time: "2014-278", profit: -0.838,sum:76.867},{time: "2014-279", profit: 1.035,sum:77.902},{time: "2014-280", profit: 0.151,sum:78.053},{time: "2014-281", profit: 0.944,sum:78.997},{time: "2014-282", profit: 0.037,sum:79.034},{time: "2014-283", profit: -0.271,sum:78.763},{time: "2014-284", profit: 1.443,sum:80.206},{time: "2014-285", profit: -0.547,sum:79.659},{time: "2014-286", profit: 0.259,sum:79.918},{time: "2014-287", profit: -1.025,sum:78.893},{time: "2014-288", profit: -0.651,sum:78.242},{time: "2014-289", profit: -0.992,sum:77.250},{time: "2014-290", profit: -0.301,sum:76.949},{time: "2014-291", profit: 1.555,sum:78.504},{time: "2014-292", profit: 0.698,sum:79.202},{time: "2014-293", profit: 0.649,sum:79.851},{time: "2014-294", profit: 0.253,sum:80.104},{time: "2014-295", profit: -0.566,sum:79.538},{time: "2014-296", profit: -0.884,sum:78.654},{time: "2014-297", profit: -0.895,sum:77.759},{time: "2014-298", profit: -0.024,sum:77.735},{time: "2014-299", profit: 1.05,sum:78.785},{time: "2014-300", profit: -0.056,sum:78.729},{time: "2014-301", profit: 1.304,sum:80.033},{time: "2014-302", profit: 0.019,sum:80.052},{time: "2014-303", profit: 1.072,sum:81.124},{time: "2014-304", profit: 0.066,sum:81.190},{time: "2014-305", profit: 1.66,sum:82.850},{time: "2014-306", profit: -1.146,sum:81.704},{time: "2014-307", profit: 1.384,sum:83.088},{time: "2014-308", profit: 1.55,sum:84.638},{time: "2014-309", profit: -0.482,sum:84.156},{time: "2014-310", profit: -0.948,sum:83.208},{time: "2014-311", profit: 1.628,sum:84.836},{time: "2014-312", profit: -0.997,sum:83.839},{time: "2014-313", profit: -0.279,sum:83.560},{time: "2014-314", profit: -0.221,sum:83.339},{time: "2014-315", profit: -0.974,sum:82.365},{time: "2014-316", profit: 0.138,sum:82.503},{time: "2014-317", profit: 1.284,sum:83.787},{time: "2014-318", profit: 0.282,sum:84.069},{time: "2014-319", profit: -0.441,sum:83.628},{time: "2014-320", profit: 1.36,sum:84.988},{time: "2014-321", profit: -0.42,sum:84.568},{time: "2014-322", profit: 0.859,sum:85.427},{time: "2014-323", profit: -1.154,sum:84.273},{time: "2014-324", profit: 0.102,sum:84.375},{time: "2014-325", profit: 1.253,sum:85.628},{time: "2014-326", profit: -0.8,sum:84.828},{time: "2014-327", profit: 0.178,sum:85.006},{time: "2014-328", profit: 1.256,sum:86.262},{time: "2014-329", profit: -0.678,sum:85.584},{time: "2014-330", profit: -0.454,sum:85.130},{time: "2014-331", profit: 0.243,sum:85.373},{time: "2014-332", profit: 1.266,sum:86.639},{time: "2014-333", profit: 0.553,sum:87.192},{time: "2014-334", profit: -1.184,sum:86.008},{time: "2014-335", profit: 0.053,sum:86.061},{time: "2014-336", profit: -0.601,sum:85.460},{time: "2014-337", profit: 1.242,sum:86.702},{time: "2014-338", profit: 0.695,sum:87.397},{time: "2014-339", profit: 0.42,sum:87.817},{time: "2014-340", profit: -0.748,sum:87.069},{time: "2014-341", profit: -0.025,sum:87.044},{time: "2014-342", profit: -0.267,sum:86.777},{time: "2014-343", profit: -0.864,sum:85.913},{time: "2014-344", profit: 0.761,sum:86.674},{time: "2014-345", profit: -0.195,sum:86.479},{time: "2014-346", profit: 1.641,sum:88.120},{time: "2014-347", profit: 1.68,sum:89.800},{time: "2014-348", profit: -0.097,sum:89.703},{time: "2014-349", profit: 0.552,sum:90.255},{time: "2014-350", profit: -0.672,sum:89.583},{time: "2014-351", profit: 0.866,sum:90.449},{time: "2014-352", profit: 0.758,sum:91.207},{time: "2014-353", profit: 1.559,sum:92.766},{time: "2014-354", profit: 0.691,sum:93.457},{time: "2014-355", profit: 1.339,sum:94.796},{time: "2014-356", profit: -0.167,sum:94.629},{time: "2014-357", profit: -0.635,sum:93.994},{time: "2014-358", profit: -1.165,sum:92.829},{time: "2014-359", profit: 0.24,sum:93.069},{time: "2014-360", profit: -0.621,sum:92.448},{time: "2014-361", profit: -0.802,sum:91.646},{time: "2014-362", profit: 1.173,sum:92.819},{time: "2014-363", profit: 0.636,sum:93.455},
    {time: "2014-364", profit: -0.066,sum:93.389}
);


var slidebar = new Object();
slidebar.l = 60 + (620 / strategy_profit.length) * (strategy_profit.length - 15), slidebar.r = 60 + (620 / strategy_profit.length) * (strategy_profit.length);

var flag = 0;
var chartx = strategy_profit.length - 16, charty = strategy_profit.length - 1;
var canvas_slide2_mousemove = 0;
$(document).ready(function () {
//------------------------------



//------------------------------
    creatSprofitchart(chartx, charty);//策略表
    creatMprofitchart(chartx, charty);//大盘表
    creatSlideTab(strategy_profit.length);

    $("#profitbtn").bind("click", function () {
        flag = 0;
        clearall();
        $("#canvas_profit4").unbind();
        $("#canvas_mprofit4").unbind();
        creatSprofitchart(chartx, charty);//策略表
        creatMprofitchart(chartx, charty);//大盘表
    })
    $("#profitsumbtn").bind("click", function () {
        flag = 1;
        clearall();
        $("#canvas_profit4").unbind();
        $("#canvas_mprofit4").unbind();
        creatSumSprofit(chartx, charty);
        creatSumMprofit(chartx, charty);
    })
    $("#hotbtn").bind("click", function () {
        flag = 2;
        clearall();
        $("#canvas_profit4").unbind();
        $("#canvas_mprofit4").unbind();
        creatHotChart(chartx,charty);
        creatCicleChart(chartx,charty);

    })



})

function creatSprofitchart(a, b) {
    creataxix("#canvas_profit1");   //canvas_profit1中建立横轴坐标系
    creataxixy("#canvas_profit1");   //canvas_profit1中建立纵轴坐标系
    getZZT("#canvas_profit2", strategy_profit, a, b);      //canvas_profit2中建立柱状图
    setDataForProfitChart("#canvas_profit3", strategy_profit, "策略收益", a, b); //横轴纵轴坐标文字
    //selectline("#canvas_profit4");   //设置选中后的竖线效果
    $("#canvas_profit4").bind("mousemove", function (event) {
        selectline(event, '#canvas_profit4', '#canvas_mprofit4', strategy_profit, a, b);
    });
    $("#canvas_profit4").bind("mouseout", function (event) {
        //$("#showprofit").hide(500);
        //$("#showmprofit").hide(500);
    });
}
function creatMprofitchart(a, b) {
    creataxix("#canvas_mprofit1");   //canvas_mprofit1中建立横轴坐标系
    creataxixy("#canvas_mprofit1");   //canvas_mprofit1中建立纵轴坐标系
    getZZT("#canvas_mprofit2", market_profit, a, b);      //canvas_mprofit2中建立柱状图
    setDataForProfitChart("#canvas_mprofit3", market_profit, "大盘收益", a, b); //横轴纵轴坐标
    //selectline("#canvas_profit4");   //设置选中后的竖线效果
    $("#canvas_mprofit4").bind("mousemove", function (event) {
        selectline(event, '#canvas_mprofit4', '#canvas_profit4', market_profit, a, b);
    });
    $("#canvas_mprofit4").bind("mouseout", function (event) {
        //$("#showprofit").hide(500);
        //$("#showmprofit").hide(500);
    });
}
function creatSumSprofit(a, b) {
    creataxix("#canvas_profit1");   //canvas_profit1中建立横轴坐标系
    creataxixy("#canvas_profit1");   //canvas_profit1中建立纵轴坐标系
    getZXT("#canvas_profit2", strategy_profit, a, b);      //canvas_profit2中建立折线图
    setDataForSumChart("#canvas_profit3", strategy_profit, "策略收益", a, b); //横轴纵轴坐标文字
    $("#canvas_profit4").bind("mousemove", function (event) {
        selectPoint(event, '#canvas_profit4', '#canvas_mprofit4', strategy_profit, a, b);
    });
    $("#canvas_profit4").bind("mouseout", function (event) {
        //$("#showprofit").hide(500);
        //$("#showmprofit").hide(500);
    });

}
function creatSumMprofit(a, b) {
    creataxix("#canvas_mprofit1");   //canvas_mprofit1中建立横轴坐标系
    creataxixy("#canvas_mprofit1");   //canvas_mprofit1中建立纵轴坐标系
    getZXT("#canvas_mprofit2", market_profit, a, b);      //canvas_profit2中建立折线图
    setDataForSumChart("#canvas_mprofit3", market_profit, "大盘收益", a, b); //横轴纵轴坐标
    $("#canvas_mprofit4").bind("mousemove", function (event) {
        selectPoint(event, '#canvas_mprofit4', '#canvas_profit4', market_profit, a, b);
    });
    $("#canvas_mprofit4").bind("mouseout", function (event) {
        //$("#showprofit").hide(500);
        //$("#showmprofit").hide(500);
    });

}
function creatHotChart(a,b){
    creataxix("#canvas_profit1");   //canvas_profit1中建立横轴坐标系
    creataxixy("#canvas_profit1");   //canvas_profit1中建立纵轴坐标系
    getHotChart("#canvas_profit2",strategy_profit,a,b);  //在canvas_profit2中建立热力图
    setDataForHotChart("#canvas_profit3", strategy_profit, "热力图", a, b); //横轴纵轴坐标文字
    $("#canvas_profit4").bind("mousemove", function (event) {
        seletSingleLine(event, '#canvas_profit4', strategy_profit, a, b);
    });
    $("#canvas_profit4").bind("mouseout", function (event) {
        //$("#showprofit").hide(500);
    });
}
function creatCicleChart(a,b){
    var XGS_0_2=0,XGS_3_5=0,XGS_6_8=0,XGS_9_more=0; //选股数
    var victory=0,fail=0; //胜负次数分布
    var maxandmin=getMaxAndMinProfit(strategy_profit,a,b);
    var different=maxandmin.max-maxandmin.min;
    var inn=(different/6).toFixed(3);
    var RL_1=0,RL_2=0,RL_3=0,RL_4=0,RL_5=0,RL_6=0;//日利分布
    var sVictiry= 0,sFail=0;
    //选股数分布
    for(var i=a;i<=b;i++){
        //选股数
        switch(parseInt(strategy_profit[i].hot/3))
        {
            case 0:
                XGS_0_2++;
                break;
            case 1:
                XGS_3_5++;
                break;
            case 2:
                XGS_6_8++
                break;
            default:
                XGS_9_more++;
        }
        //胜负次数
        if(strategy_profit[i].profit>=0){
            victory++;
        }else{
            fail++;
        }
        //日利分布
        switch(parseInt(strategy_profit[i].profit/inn))
        {
            case 0:
                RL_1++;
                break;
            case 1:
                RL_2++;
                break;
            case 2:
                RL_3++
                break;
            case 3:
                RL_4++
                break;
            case 4:
                RL_5++
                break;
            default:
                RL_6++;
        }
        //策略胜利
        if(strategy_profit[i].profit>=market_profit[i].profit){
            sVictiry++;
        }else{
            sFail++;
        }
    }
    //选股数
    var cicle1=new cicle(145,130,120,"每日选股分布");
    cicle1.addPart("0-2",XGS_0_2,"#111111");
    cicle1.addPart("3-5",XGS_3_5,"#555555");
    cicle1.addPart("6-8",XGS_6_8,"#999999");
    cicle1.addPart("大于9",XGS_9_more,"#dddddd");
    cicle1.draw("#canvas_mprofit1");
    cicle1.addListener("#canvas_mprofit4");


    //胜负次数分布
    var cicle2=new cicle(340,100,70,"策略胜负分布");
    cicle2.addPart("victory",victory,"red");
    cicle2.addPart("fail",fail,"green");
    cicle2.draw("#canvas_mprofit1");
    cicle2.addListener("#canvas_mprofit4");

    //日利分布
    var cicle3=new cicle(470,190,70,"日盈利分布");
    cicle3.addPart((maxandmin.min+0*inn).toFixed(2)+"~"+(maxandmin.min+1*inn).toFixed(2),RL_1,"#111111");
    cicle3.addPart((maxandmin.min+1*inn).toFixed(2)+"~"+(maxandmin.min+2*inn).toFixed(2),RL_2,"#444444");
    cicle3.addPart((maxandmin.min+2*inn).toFixed(2)+"~"+(maxandmin.min+3*inn).toFixed(2),RL_3,"#777777");
    cicle3.addPart((maxandmin.min+3*inn).toFixed(2)+"~"+(maxandmin.min+4*inn).toFixed(2),RL_4,"#aaaaaa");
    cicle3.addPart((maxandmin.min+4*inn).toFixed(2)+"~"+(maxandmin.min+5*inn).toFixed(2),RL_5,"#cccccc");
    cicle3.addPart((maxandmin.min+5*inn).toFixed(2)+"~"+(maxandmin.min+6*inn).toFixed(2),RL_6,"#eeeeee");
    cicle3.draw("#canvas_mprofit1");
    cicle3.addListener("#canvas_mprofit4");


    //策略胜利
    var cicle4=new cicle(600,100,70,"策略战胜率");
    cicle4.addPart("策略胜利",sVictiry,"red");
    cicle4.addPart("股池胜利",sFail,"green");
    cicle4.draw("#canvas_mprofit1");
    cicle4.addListener("#canvas_mprofit4");

}
function creatSlideTab(number) {
    creatSlidebg("#canvas_slide1", "#cccccc");
    creatSlideBar("#canvas_slide2");

    var left = getpos($("#canvas_slide2")[0]).l;
    canvas_slide_listener("#canvas_slide2", left);
}
/*建立横线的坐标系*/
function creataxix(name) {
    var height = $(name).height();
    var width = $(name).width() - 30;
    line(name, 60, 40, width, 40, "#dddddd");
    line(name, 60, 40 + (height - 60) / 6, width, 40 + (height - 60) / 6, "#dddddd");
    line(name, 60, 40 + (height - 60) / 3, width, 40 + (height - 60) / 3, "#cccccc");
    line(name, 60, 40 + (height - 60) / 2, width, 40 + (height - 60) / 2, "#bbbbbb");
    line(name, 60, 40 + (height - 60) / 3 * 2, width, 40 + (height - 60) / 3 * 2, "#cccccc");
    line(name, 60, 40 + (height - 60) / 6 * 5, width, 40 + (height - 60) / 6 * 5, "#dddddd");
    line(name, 60, 40 + (height - 60), width, 40 + (height - 60), "#eeeeee");
}
function creataxixy(name) {
    var height = $(name).height();
    var width = $(name).width() - 30;
    line(name, 60, 40, 60, 40 + (height - 60), "#eeeeee");
}
function line(name, x1, y1, x2, y2, color) {
    var c = $(name)[0];
    var ctx = c.getContext("2d");
    ctx.strokeStyle = color;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}
/*建立柱状图*/
function getZZT(name, array, a, b) {
    var c = $(name)[0];
    var max = getMaxAndMinProfit(array, a, b).max, min = getMaxAndMinProfit(array, a, b).min;
    var singleandinnwidth = getSingleAndInnWidth(name, array, a, b);
    var singlewidth = singleandinnwidth.singlewidth, innwidth = singleandinnwidth.innwidth;
    var height = $(name).height();
    var halfheight = (height - 60) / 3;
    var ctx = c.getContext("2d");
    for (var i = a; i <= b; i++) {
        var pro = array[i].profit;
        array[i].midline = parseInt(i - a) * (singlewidth + innwidth) + 0.5 * singlewidth + 70;
        if (pro >= 0) {
            ctx.fillStyle = "red";
            ctx.fillRect((i - a) * (singlewidth + innwidth) + 70, 40 + 2*halfheight - pro / max * 2*halfheight, singlewidth, pro / max * 2*halfheight);
            array[i].x = (i - a) * (singlewidth + innwidth) + 70, array[i].y = 40 +2*halfheight- pro / max * 2*halfheight, array[i].width = singlewidth, array[i].height = pro / max * 2*halfheight;
        } else {
            ctx.fillStyle = "green";
            ctx.fillRect((i - a) * (singlewidth + innwidth) + 70, 40 + 2*halfheight, singlewidth, Math.abs(pro) / (-min) * halfheight);
            array[i].x = (i - a) * (singlewidth + innwidth) + 70, array[i].y = 40 + 2*halfheight, array[i].width = singlewidth, array[i].height = Math.abs(pro) / (-min) * halfheight;
        }
    }
}
/*建立折线图,（所在的画布，数组，数组开始）*/
function getZXT(name, array, a, b) {
    var c = $(name)[0];
    var max = getMaxAndMinSum(array, a, b).max, min = getMaxAndMinSum(array, a, b).min;
    var difference = max - min;
    var singlewidth = ($(name).width() - 90) / (b - a);
    var height = $(name).height();
    var ctx = c.getContext("2d");
    for (var i = a; i <= b; i++) {
        var sum = array[i].sum;
        array[i].summidline = parseInt((i - a) * singlewidth + 60);
        array[i].sumheight = parseInt(280 - ((array[i].sum - min) / difference * (height - 60) + 20));
    }
    for (var i = a; i < b; i++) {
        line(name, array[i].summidline, array[i].sumheight, array[i + 1].summidline, array[i + 1].sumheight, "#000000")
    }

}
/*创建热力图*/
function getHotChart(name,array,a,b){
    var c = $(name)[0];
    var max = getMaxAndMinHot(array, a, b).max, min = getMaxAndMinHot(array, a, b).min;
    var singleandinnwidth = getSingleAndInnWidth(name, array, a, b);
    var singlewidth = singleandinnwidth.singlewidth, innwidth = singleandinnwidth.innwidth;
    var height = $(name).height();
    var halfheight = (height - 60);
    var ctx = c.getContext("2d");
    for (var i = a; i <= b; i++) {
        var pro = array[i].hot;
        array[i].hotmidline = parseInt(i - a) * (singlewidth + innwidth) + 0.5 * singlewidth + 70;
            ctx.fillStyle = "red";
            ctx.fillRect((i - a) * (singlewidth + innwidth) + 70, 40 + (height - 60)  - pro / max * halfheight, singlewidth, pro / max * halfheight);
            array[i].hotx = (i - a) * (singlewidth + innwidth) + 70, array[i].hoty = 40 + (height - 60)  - pro / max * halfheight, array[i].hotwidth = singlewidth, array[i].hotheight = pro / max * halfheight;
    }
}
/*设置数值*/
function setDataForProfitChart(name, array, title, a, b) {
    var height = $(name).height(), width = $(name).width() - 100;
    var c = $(name)[0];
    var ctx = c.getContext("2d");
    var max = getMaxAndMinProfit(array, a, b).max, min = getMaxAndMinProfit(array, a, b).min;
    var singlewidth = getSingleAndInnWidth(name, array, a, b).singlewidth;
    ctx.font = "12px Microsoft YaHei";
    ctx.fillStyle = "#000000";
    ctx.font = "10px Microsoft YaHei";
    ctx.fillText(title, 0, 20);
    ctx.fillText((max).toFixed(2), 30, 45);
    ctx.fillText((max / 4 * 3).toFixed(2), 30, 45 + (height - 60) / 6);
    ctx.fillText((max / 4*2).toFixed(2), 30, 45 + (height - 60) / 3);
    ctx.fillText((max/4).toFixed(2), 30, 45 + (height - 60) / 2);
    ctx.fillText(0, 30, 45 + (height - 60) / 3 * 2);
    ctx.fillText((min / 2).toFixed(2), 30, 45 + (height - 60) / 6 * 5);
    ctx.fillText(min.toFixed(2), 30, 45 + (height - 60));

    var timenun = parseInt((b - a + 1) / 6);
    var timewidth = (width / 6).toFixed(0);
    for (var i = a; i <= b; i = i + timenun) {
        ctx.fillText(array[i].time, array[i].midline - 30, 58 + (height - 60));
        line(name, array[i].midline, 40 + (height - 60), array[i].midline, 48 + (height - 60), "#eeeeee")
    }

}
function setDataForSumChart(name, array, title, a, b) {
    var height = $(name).height(), width = $(name).width() - 100;
    var c = $(name)[0];
    var ctx = c.getContext("2d");
    var max = getMaxAndMinSum(array, a, b).max, min = getMaxAndMinSum(array, a, b).min;
    var inn = (max - min) / 6;
    ctx.font = "12px Microsoft YaHei";
    ctx.fillStyle = "#000000";
    ctx.font = "10px Microsoft YaHei";
    ctx.fillText(title, 0, 20);
    ctx.fillText((max).toFixed(2), 30, 45);
    ctx.fillText((max - 1 * inn).toFixed(2), 30, 45 + (height - 60) / 6);
    ctx.fillText((max - 2 * inn).toFixed(2), 30, 45 + (height - 60) / 3);
    ctx.fillText((max - 3 * inn).toFixed(2), 30, 45 + (height - 60) / 2);
    ctx.fillText((max - 4 * inn).toFixed(2), 30, 45 + (height - 60) / 3 * 2);
    ctx.fillText((max - 5 * inn).toFixed(2), 30, 45 + (height - 60) / 6 * 5);
    ctx.fillText((max - 6 * inn).toFixed(2), 30, 45 + (height - 60));

    var timenun = parseInt((b - a + 1) / 6);
    var timewidth = (width / 6).toFixed(0);
    for (var i = a; i <= b; i = i + timenun) {
        ctx.fillText(array[i].time, array[i].summidline - 30, 58 + (height - 60));
        line(name, array[i].midline, 40 + (height - 60), array[i].midline, 48 + (height - 60), "#eeeeee")
    }
}
function setDataForHotChart(name,array,title,a,b){
    var height = $(name).height(), width = $(name).width() - 100;
    var c = $(name)[0];
    var ctx = c.getContext("2d");
    var max = getMaxAndMinHot(array, a, b).max, min = getMaxAndMinHot(array, a, b).min;
    var inn = (max - min) / 6;
    ctx.fillStyle = "#000000";
    ctx.font = "10px Microsoft YaHei";
    ctx.fillText(title, 0, 20);
    ctx.fillText((max).toFixed(2), 30, 45);
    ctx.fillText((max - 1 * inn).toFixed(2), 30, 45 + (height - 60) / 6);
    ctx.fillText((max - 2 * inn).toFixed(2), 30, 45 + (height - 60) / 3);
    ctx.fillText((max - 3 * inn).toFixed(2), 30, 45 + (height - 60) / 2);
    ctx.fillText((max - 4 * inn).toFixed(2), 30, 45 + (height - 60) / 3 * 2);
    ctx.fillText((max - 5 * inn).toFixed(2), 30, 45 + (height - 60) / 6 * 5);
    ctx.fillText((max - 6 * inn).toFixed(2), 30, 45 + (height - 60));

    var timenun = parseInt((b - a + 1) / 6);
    var timewidth = (width / 6).toFixed(0);
    for (var i = a; i <= b; i = i + timenun) {
        ctx.fillText(array[i].time, array[i].hotmidline - 30, 58 + (height - 60));
        line(name, array[i].hotmidline, 40 + (height - 60), array[i].hotmidline, 48 + (height - 60), "#eeeeee")
    }
}
function cicle(x,y,r,title){
    //var cicle=new Object();
    this.x=x;
    this.y=y;
    this.r=r;
    this.title=title;
    this.part=new Array();
}
cicle.prototype.addPart= function (name,value,color) {
    this.part.push({name:name,value:value,color:color});
}
cicle.prototype.draw= function (name) {
    var sum=0;
    var ciclerad,ciclesumrad=-0.5*Math.PI;    //角度以及总角度
    for(var i in this.part){
        sum=sum+this.part[i].value;
    }

    var c=$(name)[0];
    var ctx=c.getContext("2d");
    for(var i in this.part) {
        ciclerad = this.part[i].value / sum * 2 * Math.PI;
        ctx.beginPath();
        ctx.fillStyle = this.part[i].color;
        ctx.lineWidth = 3;
        ctx.lineTo(this.x, this.y);
        ctx.arc(this.x, this.y, this.r, ciclesumrad, ciclerad + ciclesumrad);

        //ctx.fillRect(this.x-this.r,this.y+this.r/2,20,10);

        this.part[i].rad = ciclesumrad;
        this.part[i].cic = ciclerad;
        ciclesumrad = ciclesumrad + ciclerad;
        ctx.lineTo(this.x, this.y);
        ctx.strokeStyle = "#ffffff";
        ctx.stroke();
        ctx.fill();


    }

        ctx.fillStyle="#222222";
        ctx.font = "10px Microsoft YaHei";
        ctx.fillText(this.title, this.x-28, this.y+this.r+15);



}
cicle.prototype.addListener= function (name) {
    var c = $(name)[0];
    //var c = $("#canvas_mprofit4")[0];
    var tan,rad;
    var size = getpos(c);
    var part=this.part;
    var cicle11=this;

    var x0=this.x,y0=this.y,r0=this.r,x1,y1;
    var flag=-1;
    $(name).bind("mousemove", function (event) {
        flag = -1;
        var x = event.pageX - size.l, y = event.pageY - size.t;
        if ((x > x0 - r0) && (x < x0 + r0) && (y < y0 + r0) && (y > y0 - r0)) {
            if (((x0 - x) * (x0 - x) + (y0 - y) * (y0 - y)) < (r0 * r0)) {
                tan = (x - x0) / (y0 - y);
                rad = Math.atan(tan);
                if (rad < 0) rad = rad + Math.PI;
                if (x < x0) rad = rad + Math.PI;
                rad = rad - Math.PI / 2;
                for (var i in part) {
                    if (rad > part[i].rad) flag++;
                }

                $("#showmprofit").show();
                $("#showmprofit").css({
                    "top": parseInt(event.pageY),
                    "left": parseInt(event.pageX)
                });


                var ctx = c.getContext("2d");
                ctx.beginPath();
                ctx.clearRect(0, 0, 720, 340);
                ctx.fillStyle = "white";
                ctx.globalAlpha = 0.5;
                ctx.lineTo(x0, y0);
                ctx.arc(x0, y0, r0, part[flag].rad, part[flag].rad + part[flag].cic);
                ctx.closePath();
                ctx.fill();


                $("#showmprofit").html("<p>" + part[flag].name + ":" + part[flag].value);

            } else {
                $("#showmprofit").hide(500);
            }

        }
    })

}
/*设置选中后的竖线*/
function selectline(e, name, name1, array, a, b) {
    var c = $(name)[0], c1 = $(name1)[0];
    var ctx = c.getContext("2d");
    var ctx1 = c1.getContext("2d");
    ctx.clearRect(0, 0, 720, 340);
    ctx1.clearRect(0, 0, 720, 340);
    creatselectline(e, name, name1, array, a, b);

}
function creatselectline(e, name, name1, array, a, b) {
    var height = $(name).height();
    var inn;
    var c = $(name)[0];
    var size = getpos(c);
    var canvas_profit4 = $("#canvas_profit4"), canvas_Mprofit = $("#canvas_mprofit4");
    var size_Sprofit = getpos(canvas_profit4[0]), size_Mprofit = getpos(canvas_Mprofit[0]);
    var x = e.pageX - size.l, y = e.pageY - size.t;
    var singleandinnwidth = getSingleAndInnWidth(name, array, a, b);
    var singlewidth = singleandinnwidth.singlewidth, innwidth = singleandinnwidth.innwidth;
    if (parseInt(0.5 * innwidth) >= 1) {
        inn = parseInt(0.5 * innwidth);
    } else {
        inn = 0;
    }
    if (x >= 70 - inn && x <= 700 - inn&&y<=270) {
        var number = parseInt((x - 70 + inn) / (singlewidth + innwidth)) + a;
        if (number < array.length) {
            var c = canvas_profit4[0], c1 = canvas_Mprofit[0];
            var ctx = c.getContext("2d");
            var ctx1 = c1.getContext("2d");

            ctx.fillStyle = "#ffffff";
            ctx.globalAlpha = 0.5;
            ctx1.fillStyle = "#ffffff";
            ctx1.globalAlpha = 0.5;
            ctx.fillRect(strategy_profit[number].x, strategy_profit[number].y, strategy_profit[number].width, strategy_profit[number].height);
            ctx1.fillRect(market_profit[number].x, market_profit[number].y, market_profit[number].width, market_profit[number].height);

            line(name, array[number].midline, 40, array[number].midline, 40 + (height - 60), "#cccccc");
            line(name1, array[number].midline, 40, array[number].midline, 40 + (height - 60), "#cccccc");
            $("#showprofit").show();
            $("#showmprofit").show();
            $("#showprofit").css({
                "top": y + size_Sprofit.t,
                "left": array[number].midline + size_Sprofit.l
            });
            $("#showmprofit").css({
                "top": y + size_Mprofit.t,
                "left": array[number].midline + size_Mprofit.l
            });
            $("#showprofit").html("<p>" + strategy_profit[number].time + "</p>" + "<p>盈利:" + strategy_profit[number].profit + "</p>");
            $("#showmprofit").html("<p>" + market_profit[number].time + "</p>" + "<p>盈利:" + market_profit[number].profit + "</p>");

        }
    } else {
        $("#showprofit").hide(500);
        $("#showmprofit").hide(500);
    }
}
/*单边柱状图选中后*/
function seletSingleLine(e,name,array,a,b){
    var c=$(name)[0];
    var ctx= c.getContext("2d");
    ctx.clearRect(0,0,720,340);
    creatselectSingleline(e,name,array,a,b);
}
function creatselectSingleline(e,name,array,a,b){
    var height = $(name).height();
    var inn;
    var c = $(name)[0];
    var size = getpos(c);
    var canvas_profit4 = $(name);
    var size_Sprofit = getpos(canvas_profit4[0]);
    var x = e.pageX - size.l, y = e.pageY - size.t;
    var singleandinnwidth = getSingleAndInnWidth(name, array, a, b);
    var singlewidth = singleandinnwidth.singlewidth, innwidth = singleandinnwidth.innwidth;
    if (parseInt(0.5 * innwidth) >= 1) {
        inn = parseInt(0.5 * innwidth);
    } else {
        inn = 0;
    }
    if (x >= 70 - inn && x <= 700 - inn&&y<=270) {
        var number = parseInt((x - 70 + inn) / (singlewidth + innwidth)) + a;
        if (number < array.length) {
            var c = canvas_profit4[0];
            var ctx = c.getContext("2d");

            ctx.fillStyle = "#ffffff";
            ctx.globalAlpha = 0.5;
            ctx.fillRect(strategy_profit[number].hotx, strategy_profit[number].hoty, strategy_profit[number].hotwidth, strategy_profit[number].hotheight);
            line(name, array[number].hotmidline, 40, array[number].hotmidline, 40 + (height - 60), "#cccccc");
            $("#showprofit").show();
            $("#showprofit").css({
                "top": y + size_Sprofit.t,
                "left": array[number].hotmidline + size_Sprofit.l
            });
            $("#showprofit").html("<p>" + strategy_profit[number].time + "</p>" + "<p>热度:" + strategy_profit[number].hot + "</p>");

        }
    } else {
        $("#showprofit").hide(500);
    }
}

/*选中后的小泡泡*/
function selectPoint(e, name, name1, array, a, b) {
    var c = $(name)[0], c1 = $(name1)[0];
    var ctx = c.getContext("2d");
    var ctx1 = c1.getContext("2d");
    ctx.clearRect(0, 0, 720, 340);
    ctx1.clearRect(0, 0, 720, 340);
    creatPoint(e, name, name1, array, a, b);
}
function creatPoint(e, name, name1, array, a, b) {
    var canvas_profit4 = $("#canvas_profit4"), canvas_Mprofit = $("#canvas_mprofit4");
    var size_Sprofit = getpos(canvas_profit4[0]), size_Mprofit = getpos(canvas_Mprofit[0]);
    var singlewidth = ($(name).width() - 90) / (b - a + 1);
    var c = $(name)[0];
    var size = getpos(c);
    var x = e.pageX - size.l, y = e.pageY - size.t;
    if (x >= 55 && x < 695&&y<=270) {
        var number = parseInt((x - 60) / singlewidth) + a;
        if (number < a) number = a;
        if (number > b) number = b;
        var c0 = canvas_profit4[0], c1 = canvas_Mprofit[0];
        var cxt0 = c0.getContext("2d"), cxt1 = c1.getContext("2d");
        cxt0.beginPath();
        cxt0.strokeStyle = "#dddddd";
        cxt0.arc(strategy_profit[number].summidline, strategy_profit[number].sumheight, 5, 0, Math.PI * 2);
        cxt0.closePath();
        cxt0.fillStyle = "#cccccc";
        cxt0.fill();
        cxt0.stroke();

        cxt1.beginPath();
        cxt1.strokeStyle = "#dddddd";
        cxt1.arc(market_profit[number].summidline, market_profit[number].sumheight, 5, 0, Math.PI * 2);
        cxt1.closePath();
        cxt1.fillStyle = "#cccccc";
        cxt1.fill();
        cxt1.stroke();

        $("#showprofit").show();
        $("#showmprofit").show();
        $("#showprofit").css({
            "top": y + size_Sprofit.t,
            "left": array[number].summidline + size_Sprofit.l
        });
        $("#showmprofit").css({
            "top": y + size_Mprofit.t,
            "left": array[number].summidline + size_Mprofit.l
        });
        $("#showprofit").html("<p>" + strategy_profit[number].time + "</p>" + "<p>总盈利:" + strategy_profit[number].sum + "</p>" + "<p>当日盈利:" + strategy_profit[number].profit + "</p>");
        $("#showmprofit").html("<p>" + market_profit[number].time + "</p>" + "<p>总盈利:" + market_profit[number].sum + "</p>" + "<p>当日盈利:" + market_profit[number].profit + "</p>");


    } else {
        $("#showprofit").hide(500);
        $("#showmprofit").hide(500);
    }
}
/*创建滑动条*/
function creatSlidebg(name, color) {
    var height = $(name).height();
    var c = $(name)[0];
    var ctx = c.getContext("2d");
    ctx.fillStyle = color;
    ctx.fillRect(60, 0, 630, height);
}
function creatSlideBar(name) {
    var min;
    var height = $(name).height();
    var c = $(name)[0];
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 720, 25);
    ctx.fillStyle = "#000000";
    ctx.fillRect(slidebar.l, 0, 10, height);
    ctx.fillRect(slidebar.r, 0, 10, height);
    ctx.fillStyle = "#888888";
    if (slidebar.l <= slidebar.r) {
        min = slidebar.l;
    } else {
        min = slidebar.r;
    }
    if (Math.abs(slidebar.r - slidebar.l) > 10) {
        ctx.fillRect(min + 10, 0, Math.abs(slidebar.r - slidebar.l) - 10, height);
    }
}
function canvas_slide_listener(name, left) {
    var startl;
    var slidel = slidebar.l, slider = slidebar.r;//滑块初始位置
    $(name).bind("mousedown", function (e) {
        slidel = slidebar.l, slider = slidebar.r
        startl = e.pageX - left;
        if (startl > slidebar.l && startl < slidebar.l + 10) {
            canvas_slide2_mousemove = 1;   //1代表左边的滑块
        }
        if (startl > slidebar.r && startl < slidebar.r + 10) {
            canvas_slide2_mousemove = 2;   //2是右边滑块
        }
        if (((startl >= slidebar.l + 10) && (startl < slidebar.r))||((startl >= slidebar.r+ 10) && (startl < slidebar.l))) {
            canvas_slide2_mousemove = 3;  //3是中间
        }
    })
    $(name).bind("mousemove", function (e) {
        var mousel = e.pageX - left;    //mousel为鼠标距离右侧位置
        var movedistance = mousel - startl; //movediatance为偏移量  负数为向左偏移，正数右侧偏移
        //var l=1;    //l为物体距离右侧位置
        if (canvas_slide2_mousemove == 1) {
            if (slidel + movedistance < 60)movedistance = 60 - slidel;
            if (movedistance + slidel > 680)movedistance = 680 - slidel;
            slidebar.l = slidel + movedistance;


        }
        if (canvas_slide2_mousemove == 2) {
            if (slider + movedistance < 60)movedistance = 60 - slider;
            if (movedistance + slider > 680)movedistance = 680 - slider;
            slidebar.r = slider + movedistance;

        }
        if (canvas_slide2_mousemove == 3) {
            if (slider + movedistance < 60)movedistance = 60 - slider;
            if (movedistance + slider > 680)movedistance = 680 - slider;
            if (slidel + movedistance < 60)movedistance = 60 - slidel;
            if (movedistance + slidel > 680)movedistance = 680 - slidel;
            slidebar.l = slidel + movedistance;
            slidebar.r = slider + movedistance;
            creatSlideBar(name);
        }
        if (Math.abs(slidebar.l - slidebar.r) >= 10) {
            creatSlideBar(name);

            if (canvas_slide2_mousemove == 1 || canvas_slide2_mousemove == 2 || canvas_slide2_mousemove == 3) {
                var min, max;
                if (slidebar.l < slidebar.r) {
                    min = slidebar.l;
                    max = slidebar.r;
                } else {
                    min = slidebar.r;
                    max = slidebar.l;
                }
                var x = parseInt((min - 60) / (621 / strategy_profit.length));
                var y = parseInt((max - 60) / (621 / strategy_profit.length));
                if (Math.abs(x - chartx) >= 1 || Math.abs(y - charty) >= 1) {
                    chartx = x;
                    charty = y;
                    $("#canvas_profit4").unbind();
                    $("#canvas_mprofit4").unbind();
                    if (flag == 0) {
                        clearall();
                        creatSprofitchart(chartx, charty);//策略表
                        creatMprofitchart(chartx, charty);//大盘表
                    }
                    if (flag == 1) {
                        clearall();
                        creatSumSprofit(chartx, charty);
                        creatSumMprofit(chartx, charty);
                    }
                    if (flag == 2) {
                        clearall();
                        creatHotChart(chartx, charty);
                        creatCicleChart(chartx,charty);
                    }
                }
            }
        }

    })
    $(name).bind("mouseup", function () {
        canvas_slide2_mousemove = 0;
    })
}



function getMaxAndMinProfit(array, a, b) {
    var maxandmin = new Object();
    maxandmin.max = array[a].profit;
    maxandmin.min = array[a].profit;
    for (var i = a; i <= b; i++) {
        if (array[i].profit > maxandmin.max) maxandmin.max = array[i].profit;
        if (array[i].profit < maxandmin.min) maxandmin.min = array[i].profit;
    }
    return maxandmin;
}
function getMaxAndMinSum(array, a, b) {
    var maxandmin = new Object();
    maxandmin.max = array[a].sum;
    maxandmin.min = array[a].sum;
    for (var i = a; i <= b; i++) {
        if (array[i].sum > maxandmin.max) maxandmin.max = array[i].sum;
        if (array[i].sum < maxandmin.min) maxandmin.min = array[i].sum;
    }
    return maxandmin;
}
function getMaxAndMinHot(array, a, b) {
    var maxandmin = new Object();
    maxandmin.max = array[a].hot;
    maxandmin.min = array[a].hot;
    for (var i = a; i <= b; i++) {
        if (array[i].hot > maxandmin.max) maxandmin.max = array[i].hot;
        if (array[i].hot < maxandmin.min) maxandmin.min = array[i].hot;
    }
    return maxandmin;
}

function getSingleAndInnWidth(name, array, a, b) {
    var num = b - a + 1;
    var width = $(name).width() - 100; //得到总宽度
    var singlewidth = (width / num).toFixed(1) / 3 * 2;
    if (singlewidth > 55) singlewidth = 55;
    var innwidth = (width / num).toFixed(1) / 3;
    var obj = new Object();
    obj.innwidth = innwidth;
    obj.singlewidth = singlewidth;
    return obj;
}

function getpos(e) {
    var t = e.offsetTop;
    var l = e.offsetLeft;
    var height = e.offsetHeight;
    while (e = e.offsetParent) {
        t += e.offsetTop;
        l += e.offsetLeft;
    }
    var size = new Object();
    ;
    size.t = t;
    size.l = l;
    return size;
}
function clearall() {
    var c00 = $("#canvas_mprofit1")[0], c01 = $("#canvas_mprofit2")[0], c02 = $("#canvas_mprofit3")[0], c03 = $("#canvas_mprofit4")[0];
    var ctx00 = c00.getContext("2d"), ctx01 = c01.getContext("2d"), ctx02 = c02.getContext("2d"), ctx03 = c03.getContext("2d");
    ctx00.clearRect(0, 0, 720, 340);
    ctx01.clearRect(0, 0, 720, 340);
    ctx02.clearRect(0, 0, 720, 340);
    ctx03.clearRect(0, 0, 720, 340);

    var c10 = $("#canvas_profit1")[0], c11 = $("#canvas_profit2")[0], c12 = $("#canvas_profit3")[0], c13 = $("#canvas_profit4")[0];
    var ctx10 = c10.getContext("2d"), ctx11 = c11.getContext("2d"), ctx12 = c12.getContext("2d"), ctx13 = c13.getContext("2d");
    ctx10.clearRect(0, 0, 720, 340);
    ctx11.clearRect(0, 0, 720, 340);
    ctx12.clearRect(0, 0, 720, 340);
    ctx13.clearRect(0, 0, 720, 340);
}

function getrad() {
    //strategy_profit[0].sum = strategy_profit[0].profit, market_profit[0].sum = market_profit[0].profit;
    //for (var i = 1; i < market_profit.length; i++) {
    //    market_profit[i].sum = (market_profit[i - 1].sum + market_profit[i].profit);
    //}
    for (var i = 364; i >= 0; i--) {
        var k = (Math.random() * 10 ).toFixed(0);
        $("#test").after("{time: \"2014-" + i + "\", profit: " + strategy_profit[i].profit + ",sum:" + strategy_profit[i].sum.toFixed(3) +",hot:"+k+"},");
    }
}