package com.ti2cc;
import static spark.Spark.*;
import com.google.gson.Gson;
//import com.google.gson.JsonElement;
import java.io.*;
import java.io.FileNotFoundException;
import java.nio.file.Paths;
import java.util.Scanner;
import java.util.Set;
import org.eclipse.jetty.client.api.Response;

 enum StatusResponse {
    SUCCESS ("Success"),
    ERROR ("Error");
	 
	private String status;
    StatusResponse(String string) {
		status = string;
	}
}
class StandardResponse {

    private StatusResponse status;


    public StandardResponse(StatusResponse status) {
       this.status = status;
    }

}

public class api{

	public static DAO dao = new DAO();
	
	public static void main(String[] args) {
		staticFileLocation("/pages");
		port(5638);
		get("/api", (req, res) -> {res.redirect("index.html"); return null;});
		
		post("/insert", (req, res) -> 
		{ 
		dao.conectar();
		String[] atr = new String[7]; 
		atr[0] = req.queryParams("primeiro_nome");
		atr[1] = req.queryParams("sobrenome");
		atr[2] = req.queryParams("cpf");
		atr[3] = req.queryParams("estado_civil");
		String[] preData = req.queryParams("data_nascimento").split("-");
		String data = preData[2] + "/" + preData[1] + "/" + preData[0];
		atr[4] = data;
		atr[5] = req.queryParams("sexo");
		atr[6] = req.queryParams("renda");
        res.header("Content-Type", "application/json");
		CandidateParent candidato = new CandidateParent(atr[0], atr[1], atr[2], atr[3], atr[4], atr[5], atr[6]);
		dao.inserirCandidato(candidato);
        String status = gson.toJson(new StandardResponse(StatusResponse.SUCCESS));
        dao.close();
        return status;
		});
		
		get("/list", (req, res) -> 
		{
			dao.conectar();
			CandidateParent[] candidatos = dao.getCandidatos();
			dao.close();
			return gson.toJsonTree(candidatos);
		});
		
		
		post("/delete", (req, res) -> 
		{ 
			String status = "CPF INEXISTENTE OU FORA DO REGISTRO";
			dao.conectar();
			CandidateParent candidato =  dao.getCandidato(req.body());
			if(candidato != null)
			{
				dao.excluirCandidato(req.body());
				status = "TUPLA EXCLUIDA COM SUCESSO";
			}
	        res.header("Content-Type", "text/html");
	        dao.close();
	        return status;
		});
		
		
		post("/valido", (req, res) ->
		{
			dao.conectar();
			CandidateParent candidato =  dao.getCandidato(req.body());
			if(candidato != null)
			{
				String[] preData = candidato.getData_nascimento().split("/");
				String data = preData[2] + "-" + preData[1] + "-" + preData[0];
				candidato.setData_nascimento(data);
			}
			dao.close();
			return gson.toJson(candidato);
		});
		post("/update", (req, res) -> 
		{ 
		dao.conectar();
		String[] atr = new String[7]; 
		atr[0] = req.queryParams("primeiro_nome");
		atr[1] = req.queryParams("sobrenome");
		atr[2] = req.queryParams("cpf");
		atr[3] = req.queryParams("estado_civil");
		String[] preData = req.queryParams("data_nascimento").split("-");
		String data = preData[2] + "/" + preData[1] + "/" + preData[0];
		atr[4] = data;
		atr[5] = req.queryParams("sexo");
		atr[6] = req.queryParams("renda");
        res.header("Content-Type", "application/json");
		CandidateParent candidato = new CandidateParent(atr[0], atr[1], atr[2], atr[3], atr[4], atr[5], atr[6]);
		dao.atualizarCandidato(candidato);
        String status = gson.toJson(new StandardResponse(StatusResponse.SUCCESS));
        dao.close();
        return status;
		});

	}
	

	public static String aux;
	public static boolean novo;
	public static Gson gson = new Gson();

}
