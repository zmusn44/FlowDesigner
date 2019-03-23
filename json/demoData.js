var data = {
	"nodeDataArray": [
		{
			"text": "开始",
			"key": "E00001",
			"nodeType": "start",
			"locTop": 539,
			"locLeft": 507,
			"nodeHeight": "60px",
			"nodeWidth": "60px",
			"bgColor": "#78dc6b"
		},
		{
			"text": "填写申请单",
			"key": "T00001",
			"nodeType": "comm",
			"locTop": 538.97998046875,
			"locLeft": 743,
			"nodeHeight": "60px",
			"nodeWidth": "100px",
			"bgColor": "#6babdc"
		},
		{
			"text": "财务部审批",
			"key": "T00002",
			"nodeType": "comm",
			"locTop": 378.97998046875,
			"locLeft": 743,
			"nodeHeight": "60px",
			"nodeWidth": "100px",
			"bgColor": "#6babdc"
		},
		{
			"text": "总经理审批",
			"key": "T00003",
			"nodeType": "comm",
			"locTop": 219,
			"locLeft": 743,
			"nodeHeight": "60px",
			"nodeWidth": "100px",
			"bgColor": "#6babdc"
		},
		{
			"text": "发放资金",
			"key": "T00004",
			"nodeType": "comm",
			"locTop": 387,
			"locLeft": 974,
			"nodeHeight": "60px",
			"nodeWidth": "100px",
			"bgColor": "#6babdc"
		},
		{
			"text": "确认资金",
			"key": "T00005",
			"nodeType": "comm",
			"locTop": 547,
			"locLeft": 974,
			"nodeHeight": "60px",
			"nodeWidth": "100px",
			"bgColor": "#6babdc"
		},
		{
			"text": "结束",
			"key": "E00002",
			"nodeType": "end",
			"locTop": 219,
			"locLeft": 1271,
			"nodeHeight": "60px",
			"nodeWidth": "60px",
			"bgColor": "#dc6b6b"
		},
		{
			"text": "结束",
			"key": "E00003",
			"nodeType": "end",
			"locTop": 547,
			"locLeft": 1280,
			"nodeHeight": "60px",
			"nodeWidth": "60px",
			"bgColor": "#dc6b6b"
		}
	],
	"linkDataArray": [
		{
			"from": "E00001",
			"to": "T00001",
			"routerId": "R00001",
			"label": "",
			"sourceAnchors": [ "Bottom", "Right", "Top", "Left" ],
			"targetAnchors": [ "Bottom", "Right", "Top", "Left"]
		},
		{
			"from": "T00001",
			"to": "T00002",
			"routerId": "R00002",
			"label": "",
			"sourceAnchors": [ "Bottom", "Right", "Top", "Left" ],
			"targetAnchors": [ "Bottom", "Right", "Top", "Left" ]
		},
		{
			"from": "T00002",
			"to": "T00003",
			"routerId": "R00003",
			"label": "",
			"sourceAnchors": [ "Bottom", "Right", "Top", "Left" ],
			"targetAnchors": [ "Bottom", "Right", "Top", "Left" ]
		},
		{
			"from": "T00003",
			"to": "E00002",
			"routerId": "R00004",
			"label": "不同意",
			"sourceAnchors": [ "Bottom", "Right", "Top", "Left" ],
			"targetAnchors": [ "Bottom", "Right", "Top", "Left" ]
		},
		{
			"from": "T00003",
			"to": "T00004",
			"routerId": "R00005",
			"label": "同意",
			"sourceAnchors": [ "Bottom", "Right", "Top", "Left" ],
			"targetAnchors": [ "Bottom", "Right", "Top", "Left" ]
		},
		{
			"from": "T00004",
			"to": "T00005",
			"routerId": "R00006",
			"label": "",
			"sourceAnchors": [ "Bottom", "Right", "Top", "Left" ],
			"targetAnchors": [ "Bottom", "Right", "Top", "Left" ]
		},
		{
			"from": "T00005",
			"to": "E00003",
			"routerId": "R00007",
			"label": "",
			"sourceAnchors": [ "Bottom", "Right", "Top", "Left" ],
			"targetAnchors": [ "Bottom", "Right", "Top", "Left" ]
		},
		{
			"from": "T00003",
			"to": "T00002",
			"routerId": "R00008",
			"label": "回退",
			"sourceAnchors": [ "Left" ],
			"targetAnchors": [ "Left" ]
		}
	]
};