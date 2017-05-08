//
//  TripsViewController.swift
//  Skyborne
//
//  Created by Dominic Philip on 5/5/17.
//  Copyright © 2017 Skyborne Inc. All rights reserved.
//

import UIKit

class TripsTableViewController: UITableViewController {
    
    // MARK: Properties
    
    var trips = [Trip]()

    override func viewDidLoad() {
        super.viewDidLoad()

        tableView.tableFooterView = UIView()
    }
    
    // MARK: Table View Data Sources

    override func numberOfSections(in tableView: UITableView) -> Int {
        return 1
    }
    
    override func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return trips.count
    }
    
    override func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "Trip Cell", for: indexPath)
        cell.textLabel?.text = "New York City" // TODO: Remove Stub
        
        return cell
    }
    
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        let detailViewController = segue.destination as UIViewController
        
        if let cell = sender as? UITableViewCell {
            detailViewController.navigationItem.title = cell.textLabel?.text
        }
    }
    
    override func tableView(_ tableView: UITableView, editActionsForRowAt indexPath: IndexPath) -> [UITableViewRowAction]? {
        let editAction = UITableViewRowAction(style: .normal, title: "Edit") { (rowAction, indexPath) in
            self.edit(indexPath: indexPath)
        }
        editAction.backgroundColor = UIColor(red: 0.7804, green: 0.7804, blue: 0.80, alpha: 1)

        let deleteAction = UITableViewRowAction(style: .destructive, title: "Delete") { (rowAction, indexPath) in
            self.delete(indexPath: indexPath)
        }
        deleteAction.backgroundColor = UIColor(red: 0.9882, green: 0.2392, blue: 0.2235, alpha: 1)
        
        return [deleteAction, editAction]
    }
    
    // MARK: Table View Row Actions
    
    func edit(indexPath: IndexPath) {
        // TODO: Pass Information To View Controller

        let editTripViewController: UIViewController = UIStoryboard(name: "Main", bundle: nil).instantiateViewController(withIdentifier: "Edit Trip View Controller") as! EditTripViewController
        let ediTripViewControllerNavigator = UINavigationController(rootViewController: editTripViewController)
        self.present(ediTripViewControllerNavigator, animated: true, completion: nil)
    }
    
    func delete(indexPath: IndexPath) {
        // TODO: Alert User With Confirmation

        trips.remove(at: indexPath.row)
        tableView.deleteRows(at: [indexPath], with: .fade)
    }

}
