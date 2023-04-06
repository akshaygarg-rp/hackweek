
import './App.css';
import ModelView from './components/modelView/ModelView'
import { Tabs, Tab } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const response = {
  "info": {
    "git_commit": "601236ecafee183aaa964cf3ec2bdead25d97640"
  },
  "models": {
    "abacus_provisioning.models.AbacusOAuthToken": {
			"name": "AbacusOAuthToken",
			"source": {
				"class": "abacus_provisioning.models.AbacusOAuthToken"
			},
			"permissions": {
				"read": {
					"source": {
						"class": "abacus_provisioning.models.AbacusOAuthToken"
					},
					"type": "model",
					"required": {
						"name": null,
						"expr": "Permission:System"
					}
				},
				"write": {
					"source": {
						"class": "abacus_provisioning.models.AbacusOAuthToken"
					},
					"type": "model",
					"required": {
						"name": null,
						"expr": "Permission:System"
					}
				},
				"list": {
					"source": {
						"class": "abacus_provisioning.models.AbacusOAuthToken"
					},
					"type": "model",
					"required": {
						"name": null,
						"expr": "Permission:System"
					}
				},
				"create": {
					"source": {
						"class": "abacus_provisioning.models.AbacusOAuthToken"
					},
					"type": "model",
					"required": {
						"name": null,
						"expr": "Permission:System"
					}
				}
			},
			"fields": {
				"isDeleted": {
					"name": "isDeleted",
					"source": {
						"class": "hub.models.base.tracked_document.RPTrackedDocumentMixin"
					},
					"permissions": {
						"read": {
							"source": {
								"class": "abacus_provisioning.models.AbacusOAuthToken"
							},
							"type": "model",
							"required": {
								"name": null,
								"expr": "Permission:System"
							}
						},
						"write": {
							"source": {
								"class": "abacus_provisioning.models.AbacusOAuthToken"
							},
							"type": "field_specific",
							"required": {
								"name": null,
								"expr": "Permission:System"
							}
						},
						"request": {
							"source": {
								"class": "abacus_provisioning.models.AbacusOAuthToken"
							},
							"type": "model",
							"required": {
								"name": null,
								"expr": "Permission:System"
							}
						},
						"create": {
							"source": {
								"class": "abacus_provisioning.models.AbacusOAuthToken"
							},
							"type": "model",
							"required": {
								"name": null,
								"expr": "Permission:System"
							}
						}
					}
				},
				"createdAt": {
					"name": "createdAt",
					"source": {
						"class": "hub.models.base.tracked_document.RPTrackedDocumentMixin"
					},
					"permissions": {
						"read": {
							"source": {
								"class": "abacus_provisioning.models.AbacusOAuthToken"
							},
							"type": "model",
							"required": {
								"name": null,
								"expr": "Permission:System"
							}
						},
						"write": {
							"source": {
								"class": "abacus_provisioning.models.AbacusOAuthToken"
							},
							"type": "field_specific",
							"required": {
								"name": null,
								"expr": "Permission:System"
							}
						},
						"request": {
							"source": {
								"class": "abacus_provisioning.models.AbacusOAuthToken"
							},
							"type": "model",
							"required": {
								"name": null,
								"expr": "Permission:System"
							}
						},
						"create": {
							"source": {
								"class": "abacus_provisioning.models.AbacusOAuthToken"
							},
							"type": "model",
							"required": {
								"name": null,
								"expr": "Permission:System"
							}
						}
					}
				},
				"updatedAt": {
					"name": "updatedAt",
					"source": {
						"class": "hub.models.base.tracked_document.RPTrackedDocumentMixin"
					},
					"permissions": {
						"read": {
							"source": {
								"class": "abacus_provisioning.models.AbacusOAuthToken"
							},
							"type": "model",
							"required": {
								"name": null,
								"expr": "Permission:System"
							}
						},
						"write": {
							"source": {
								"class": "abacus_provisioning.models.AbacusOAuthToken"
							},
							"type": "field_specific",
							"required": {
								"name": null,
								"expr": "Permission:System"
							}
						},
						"request": {
							"source": {
								"class": "abacus_provisioning.models.AbacusOAuthToken"
							},
							"type": "model",
							"required": {
								"name": null,
								"expr": "Permission:System"
							}
						},
						"create": {
							"source": {
								"class": "abacus_provisioning.models.AbacusOAuthToken"
							},
							"type": "model",
							"required": {
								"name": null,
								"expr": "Permission:System"
							}
						}
					}
				},
				"lock": {
					"name": "lock",
					"source": {
						"class": "hub.models.base.tracked_document.RPTrackedDocumentMixin"
					},
					"permissions": {
						"read": {
							"source": {
								"class": "abacus_provisioning.models.AbacusOAuthToken"
							},
							"type": "field_specific",
							"required": {
								"name": null,
								"expr": "Permission:System"
							}
						},
						"write": {
							"source": {
								"class": "abacus_provisioning.models.AbacusOAuthToken"
							},
							"type": "field_specific",
							"required": {
								"name": null,
								"expr": "Permission:System"
							}
						},
						"request": {
							"source": {
								"class": "abacus_provisioning.models.AbacusOAuthToken"
							},
							"type": "field_specific",
							"required": {
								"name": null,
								"expr": "Permission:System"
							}
						},
						"create": {
							"source": {
								"class": "abacus_provisioning.models.AbacusOAuthToken"
							},
							"type": "field_specific",
							"required": {
								"name": null,
								"expr": "Permission:System"
							}
						}
					}
				},
				"external_on_changes": {
					"name": "external_on_changes",
					"source": {
						"class": "hub.models.base.tracked_document.RPTrackedDocumentMixin"
					},
					"permissions": {
						"read": {
							"source": {
								"class": "abacus_provisioning.models.AbacusOAuthToken"
							},
							"type": "field_specific",
							"required": {
								"name": null,
								"expr": "Permission:System"
							}
						},
						"write": {
							"source": {
								"class": "abacus_provisioning.models.AbacusOAuthToken"
							},
							"type": "field_specific",
							"required": {
								"name": null,
								"expr": "Permission:System"
							}
						},
						"request": {
							"source": {
								"class": "abacus_provisioning.models.AbacusOAuthToken"
							},
							"type": "field_specific",
							"required": {
								"name": null,
								"expr": "Permission:System"
							}
						},
						"create": {
							"source": {
								"class": "abacus_provisioning.models.AbacusOAuthToken"
							},
							"type": "field_specific",
							"required": {
								"name": null,
								"expr": "Permission:System"
							}
						}
					}
				},
				"company": {
					"name": "company",
					"source": {
						"class": "hub.models.RPDocumentWithoutRole"
					},
					"permissions": {
						"read": {
							"source": {
								"class": "abacus_provisioning.models.AbacusOAuthToken"
							},
							"type": "model",
							"required": {
								"name": null,
								"expr": "Permission:System"
							}
						},
						"write": {
							"source": {
								"class": "abacus_provisioning.models.AbacusOAuthToken"
							},
							"type": "model",
							"required": {
								"name": null,
								"expr": "Permission:System"
							}
						},
						"request": {
							"source": {
								"class": "abacus_provisioning.models.AbacusOAuthToken"
							},
							"type": "model",
							"required": {
								"name": null,
								"expr": "Permission:System"
							}
						},
						"create": {
							"source": {
								"class": "abacus_provisioning.models.AbacusOAuthToken"
							},
							"type": "model",
							"required": {
								"name": null,
								"expr": "Permission:System"
							}
						}
					}
				},
				"owner": {
					"name": "owner",
					"source": {
						"class": "hub.spoke_models.OAuthToken"
					},
					"permissions": {
						"read": {
							"source": {
								"class": "abacus_provisioning.models.AbacusOAuthToken"
							},
							"type": "owner_read",
							"required": {
								"name": null,
								"expr": "Permission:All"
							}
						},
						"write": {
							"source": {
								"class": "abacus_provisioning.models.AbacusOAuthToken"
							},
							"type": "model",
							"required": {
								"name": null,
								"expr": "Permission:System"
							}
						},
						"request": {
							"source": {
								"class": "abacus_provisioning.models.AbacusOAuthToken"
							},
							"type": "model",
							"required": {
								"name": null,
								"expr": "Permission:System"
							}
						},
						"create": {
							"source": {
								"class": "abacus_provisioning.models.AbacusOAuthToken"
							},
							"type": "model",
							"required": {
								"name": null,
								"expr": "Permission:System"
							}
						}
					}
				},
				"requestCredentials": {
					"name": "requestCredentials",
					"source": {
						"class": "hub.spoke_models.OAuthToken"
					},
					"permissions": {
						"read": {
							"source": {
								"class": "abacus_provisioning.models.AbacusOAuthToken"
							},
							"type": "model",
							"required": {
								"name": null,
								"expr": "Permission:System"
							}
						},
						"write": {
							"source": {
								"class": "abacus_provisioning.models.AbacusOAuthToken"
							},
							"type": "model",
							"required": {
								"name": null,
								"expr": "Permission:System"
							}
						},
						"request": {
							"source": {
								"class": "abacus_provisioning.models.AbacusOAuthToken"
							},
							"type": "model",
							"required": {
								"name": null,
								"expr": "Permission:System"
							}
						},
						"create": {
							"source": {
								"class": "abacus_provisioning.models.AbacusOAuthToken"
							},
							"type": "model",
							"required": {
								"name": null,
								"expr": "Permission:System"
							}
						}
					}
				},
				"credentials": {
					"name": "credentials",
					"source": {
						"class": "hub.spoke_models.OAuthToken"
					},
					"permissions": {
						"read": {
							"source": {
								"class": "abacus_provisioning.models.AbacusOAuthToken"
							},
							"type": "model",
							"required": {
								"name": null,
								"expr": "Permission:System"
							}
						},
						"write": {
							"source": {
								"class": "abacus_provisioning.models.AbacusOAuthToken"
							},
							"type": "model",
							"required": {
								"name": null,
								"expr": "Permission:System"
							}
						},
						"request": {
							"source": {
								"class": "abacus_provisioning.models.AbacusOAuthToken"
							},
							"type": "model",
							"required": {
								"name": null,
								"expr": "Permission:System"
							}
						},
						"create": {
							"source": {
								"class": "abacus_provisioning.models.AbacusOAuthToken"
							},
							"type": "model",
							"required": {
								"name": null,
								"expr": "Permission:System"
							}
						}
					}
				},
				"scopes": {
					"name": "scopes",
					"source": {
						"class": "hub.spoke_models.OAuthToken"
					},
					"permissions": {
						"read": {
							"source": {
								"class": "abacus_provisioning.models.AbacusOAuthToken"
							},
							"type": "model",
							"required": {
								"name": null,
								"expr": "Permission:System"
							}
						},
						"write": {
							"source": {
								"class": "abacus_provisioning.models.AbacusOAuthToken"
							},
							"type": "model",
							"required": {
								"name": null,
								"expr": "Permission:System"
							}
						},
						"request": {
							"source": {
								"class": "abacus_provisioning.models.AbacusOAuthToken"
							},
							"type": "model",
							"required": {
								"name": null,
								"expr": "Permission:System"
							}
						},
						"create": {
							"source": {
								"class": "abacus_provisioning.models.AbacusOAuthToken"
							},
							"type": "model",
							"required": {
								"name": null,
								"expr": "Permission:System"
							}
						}
					}
				},
				"belongs_to": {
					"name": "belongs_to",
					"source": {
						"class": "hub.spoke_models.OAuthToken"
					},
					"permissions": {
						"read": {
							"source": {
								"class": "abacus_provisioning.models.AbacusOAuthToken"
							},
							"type": "model",
							"required": {
								"name": null,
								"expr": "Permission:System"
							}
						},
						"write": {
							"source": {
								"class": "abacus_provisioning.models.AbacusOAuthToken"
							},
							"type": "model",
							"required": {
								"name": null,
								"expr": "Permission:System"
							}
						},
						"request": {
							"source": {
								"class": "abacus_provisioning.models.AbacusOAuthToken"
							},
							"type": "model",
							"required": {
								"name": null,
								"expr": "Permission:System"
							}
						},
						"create": {
							"source": {
								"class": "abacus_provisioning.models.AbacusOAuthToken"
							},
							"type": "model",
							"required": {
								"name": null,
								"expr": "Permission:System"
							}
						}
					}
				},
				"systemCredentials": {
					"name": "systemCredentials",
					"source": {
						"class": "hub.spoke_models.OAuthToken"
					},
					"permissions": {
						"read": {
							"source": {
								"class": "abacus_provisioning.models.AbacusOAuthToken"
							},
							"type": "model",
							"required": {
								"name": null,
								"expr": "Permission:System"
							}
						},
						"write": {
							"source": {
								"class": "abacus_provisioning.models.AbacusOAuthToken"
							},
							"type": "model",
							"required": {
								"name": null,
								"expr": "Permission:System"
							}
						},
						"request": {
							"source": {
								"class": "abacus_provisioning.models.AbacusOAuthToken"
							},
							"type": "model",
							"required": {
								"name": null,
								"expr": "Permission:System"
							}
						},
						"create": {
							"source": {
								"class": "abacus_provisioning.models.AbacusOAuthToken"
							},
							"type": "model",
							"required": {
								"name": null,
								"expr": "Permission:System"
							}
						}
					}
				},
				"includeWebHookScopes": {
					"name": "includeWebHookScopes",
					"source": {
						"class": "hub.spoke_models.OAuthToken"
					},
					"permissions": {
						"read": {
							"source": {
								"class": "abacus_provisioning.models.AbacusOAuthToken"
							},
							"type": "model",
							"required": {
								"name": null,
								"expr": "Permission:System"
							}
						},
						"write": {
							"source": {
								"class": "abacus_provisioning.models.AbacusOAuthToken"
							},
							"type": "model",
							"required": {
								"name": null,
								"expr": "Permission:System"
							}
						},
						"request": {
							"source": {
								"class": "abacus_provisioning.models.AbacusOAuthToken"
							},
							"type": "model",
							"required": {
								"name": null,
								"expr": "Permission:System"
							}
						},
						"create": {
							"source": {
								"class": "abacus_provisioning.models.AbacusOAuthToken"
							},
							"type": "model",
							"required": {
								"name": null,
								"expr": "Permission:System"
							}
						}
					}
				},
				"_cls": {
					"name": "_cls",
					"source": {
						"class": "abacus_provisioning.models.AbacusOAuthToken"
					},
					"permissions": {
						"read": {
							"source": {
								"class": "abacus_provisioning.models.AbacusOAuthToken"
							},
							"type": "model",
							"required": {
								"name": null,
								"expr": "Permission:System"
							}
						},
						"write": {
							"source": {
								"class": "abacus_provisioning.models.AbacusOAuthToken"
							},
							"type": "model",
							"required": {
								"name": null,
								"expr": "Permission:System"
							}
						},
						"request": {
							"source": {
								"class": "abacus_provisioning.models.AbacusOAuthToken"
							},
							"type": "model",
							"required": {
								"name": null,
								"expr": "Permission:System"
							}
						},
						"create": {
							"source": {
								"class": "abacus_provisioning.models.AbacusOAuthToken"
							},
							"type": "model",
							"required": {
								"name": null,
								"expr": "Permission:System"
							}
						}
					}
				},
				"id": {
					"name": "id",
					"source": {
						"class": "hub.spoke_models.OAuthToken"
					},
					"permissions": {
						"read": {
							"source": {
								"class": "abacus_provisioning.models.AbacusOAuthToken"
							},
							"type": "model",
							"required": {
								"name": null,
								"expr": "Permission:System"
							}
						},
						"write": {
							"source": {
								"class": "abacus_provisioning.models.AbacusOAuthToken"
							},
							"type": "field_specific",
							"required": {
								"name": null,
								"expr": "Permission:System"
							}
						},
						"request": {
							"source": {
								"class": "abacus_provisioning.models.AbacusOAuthToken"
							},
							"type": "model",
							"required": {
								"name": null,
								"expr": "Permission:System"
							}
						},
						"create": {
							"source": {
								"class": "abacus_provisioning.models.AbacusOAuthToken"
							},
							"type": "model",
							"required": {
								"name": null,
								"expr": "Permission:System"
							}
						}
					}
				}
			}
		},
    "YModel": {
      "name": "YModel",
      "source": {
        "class": "some.module.somewhere.YModel"
      },
      "permissions": {
        "write": {
          "source": {
            "class": "some.module.somewhere.YModel"
          },
          "type": "model",
          "required": {
            "name": "ATS_JOB_ADMIN_PERM",
            "expr": "RequiredPermission(Privilege.ATS2_job_admin, children=[ATS_VIEW_ADMIN_PERM])"
          }
        },
        "read": {
          "source": {
            "class": "some.module.somehwere.YModel"
          },
          "required": {
            "name": "ATS_VIEW_ADMIN_PERM",
            "expr": "A & B & (C | D)"
          }
        }
      },
      "fields": [
        {
          "name": "field_a",
          "source": {
            "class": "a.different.module.ParentModel"
          },
          "permissions": {
            "write": {
              "source": {
                "class": "a.different.module.ParentModel"
              },
              "type": "field",
              "required": {
                "name": "DOMAIN_ADMIN_PERM",
                "expr": "RequiredPermission(Privilege.domain_admin)"
              }
            },
            "read": {
              "source": {
                "class": "some.module.somewhere.YModel"
              },
              "type": "field_groups",
              "name": "some_field_group",
              "required": {
                "name": "Permission.ALL",
                "expr": "Permission.ALL"
              }
            }
          }
        }
      ]
    }
  }
}

function App() {
  // could split in two tables
  // first shows the model permissions
  // columns: actionType, source class, type, required name, required expr

  // second shows the field permissions
  // columns: fieldName, actionType, source class, type, required name, required expr

  const renderTabs = () => {
    return (
      <Tabs defaultActiveKey="SomeModel">
        {Object.values(response.models).map((model) => {
          return (
            <Tab eventKey={model.name} title={model.name}>
              <ModelView model={model} />
            </Tab>
          );
        })}
      </Tabs>
    )
  }
  return (
    <div className="App">
      {renderTabs()}     
    </div>
  );
}

export default App;
